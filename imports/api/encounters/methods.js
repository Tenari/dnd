// Methods related to encounters

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Encounters } from './encounters.js';
import { Characters } from '../characters/characters.js';
import { MonsterTemplates } from '../monsterTemplates/monsterTemplates.js';
import { EventNotices } from '../eventNotices/eventNotices.js';
import { EventLogs } from '../eventLogs/eventLogs.js';
import { Games } from '../games/games.js';
import { roll, abilityModifier } from '../../configs/general.js';

function meleeAttack(eid, cid, opponentId) {
  const encounter = Encounters.findOne(eid);
  const character = Characters.findOne(cid);
  const opponent = Characters.findOne(opponentId);
  if(encounter.gameId != character.gameId ||
    character.userId && character.userId != this.userId ||
    !opponent)
    throw 'wtf';
  const weapon = character.equippedWeapon();

  // advantage/disadvantage ?
  // spells/special abilities/other effects ?
  // attack roll
  let hit = false;
  let crit = false;
  let autoMiss = false;
  let attackRoll = roll('1d20');
  let logMessage = 'Natural 20! Critical Hit! ';
  if (attackRoll == 20) { // crit!
    hit = true;
    crit = true;
  } else if (attackRoll == 1) { // auto-miss
    autoMiss = true;
    hit = false;
    logMessage = 'Natural 1! Automatic miss! ';
  } else {
    logMessage = ''+attackRoll+' + '+character.meleeAbilityModifier()+' + '+character.meleeProficiencyBonus()+': ';
    attackRoll += character.meleeAbilityModifier();
    attackRoll += character.meleeProficiencyBonus();
    if (attackRoll >= opponent.ac) {
      hit = true;
    }
  }

  EventLogs.insert({encounterId: encounter._id, message: character.name+' attacks '+opponent.name});
  logMessage += hit ? 'hit' : 'missed';
  EventLogs.insert({encounterId: encounter._id, message: logMessage});

  let damage = 0;
  if (hit) {
    let dmgRoll = character.rollDamage();
    let mod = character.meleeAbilityModifier();
    damage += (dmgRoll + mod);
    if (crit) {
      let dmgRoll2 = character.rollDamage();
      damage += dmgRoll2;
      EventLogs.insert({encounterId: encounter._id, message: 'Rolling damage: '+dmgRoll+' + '+dmgRoll2+' + '+mod+' = '+damage+' '+weapon.damage.damage_type+' damage.'});
    } else {
      EventLogs.insert({encounterId: encounter._id, message: 'Rolling damage: '+dmgRoll+' + '+mod+' = '+damage+' '+weapon.damage.damage_type+' damage.'});
    }
    Characters.update(opponentId, {$set: {hp: opponent.hp - damage}});
  }

  if (character.userId) {
    let message = 'You '+(hit ? 'hit' : 'missed')+' with a modified '+attackRoll+'.';
    if (hit && crit) {
      message = 'You rolled a natural 20. You crit! Nice.';
    } else if (autoMiss) {
      message = 'You rolled a natural 1. You miss. Noob.';
    }
    EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: message});

    if (hit) {
      EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'You rolled '+damage+' '+weapon.damage.damage_type.name+' damage.'});
    }
  }
  if (opponent.userId) {
    let message = character.name+(hit ? ' hit' : ' missed')+' you with a modified '+attackRoll+'.';
    if (hit && crit) {
      message = character.name+' rolled a natural 20 and crit on you!';
    } else if (autoMiss) {
      message = character.name+' rolled a natural 1 and missed you!';
    }
    EventNotices.insert({gameId: encounter.gameId, userId: opponent.userId, message: message});

    if (hit) {
      EventNotices.insert({gameId: encounter.gameId, userId: opponent.userId, message: character.name+' rolled '+damage+' '+weapon.damage.damage_type.name+' damage on you.'});
    }
  }
  let moveStats = encounter.moveStats;
  moveStats.hasActed = true;
  Encounters.update(eid, {$set: {moveStats: moveStats}});
}

function endTurn(eid) {
  const encounter = Encounters.findOne(eid);
  let nextTurn = encounter.currentTurn + 1;
  if (nextTurn >= encounter.turnOrder.length) nextTurn = 0;
  const character = Characters.findOne(encounter.turnOrder[nextTurn]);
  Encounters.update(eid, {$set: {currentTurn: nextTurn, moveStats: {movesLeft: character.speed, hasActed: false}}})
}

Meteor.methods({
  'encounters.insert'(gameId, name, type) {
    const game = Games.findOne(gameId);
    const userId = Meteor.userId();
    if (!game || userId != game.userId) return false; //you gotta be the DM to insert an encounter

    const height = 10;
    const width = 14;

    return Encounters.insert({
      gameId,
      name,
      type,
      userId,
      height,
      width,
      objects: [],
      characterLocations: [],
      createdAt: new Date(),
    });
  },
  'encounters.change-val'(eid, newval, key){
    if (!_.contains(['height','width'], key)) return false;
    let set = {};
    set[key] = parseInt(newval);
    Encounters.update(eid, {$set: set});
  },
  'encounters.command'(eid, command) {
    const encounter = Encounters.findOne(eid);
    var tokens = command.split(' ');
    /*
       A list of commands you might want to be able to do while creating or running an encounter
         roll initiative (to set turn order)
         ls monster
         ls characters
         mv [thing] [place]
         move [x] [y]
         add monster [monster id] [x] [y]
         add wall [x] [y]
         add character [_id] [x] [y]
         remove [thing] [x] [y]
         set mode [modename]
    */
    if (tokens[0] == 'add') {
      if (tokens[1] == 'wall' && tokens[2] && tokens[3]) {
        var objects = encounter.objects || [];
        objects.push({type: 'wall', x: parseInt(tokens[2]), y: parseInt(tokens[3])})
        Encounters.update(eid, {$set: {objects: objects}});
      } else if (tokens[1] == 'character' && tokens[2] && tokens[3] && tokens[4]) {
        let character = Characters.findOne(tokens[2]);
        var characterLocations = _.reject(encounter.characterLocations || [], function(loc){ return loc.characterId == tokens[2];});
        characterLocations.push({characterId: tokens[2], x: parseInt(tokens[3]), y: parseInt(tokens[4]), type: 'character', img: character.klass});
        Encounters.update(eid, {$set: {characterLocations: characterLocations}});
      } else if (tokens[1] == 'monster' && tokens[2] && tokens[3] && tokens[4]) {
        let monsterTemplate = MonsterTemplates.findOne(tokens[2]);
        let klass = monsterTemplate.name.toLowerCase().split(' ').join('-');
        let monsterCharacterId = Characters.insert({
          gameId: encounter.gameId,
          name: monsterTemplate.name,
          klass: klass,
          race: monsterTemplate.type,
          alignment: monsterTemplate.alignment,
          hp: monsterTemplate.hit_points,
          hp_max: monsterTemplate.hit_points,
          xp: 0,
          str: monsterTemplate.strength,
          con: monsterTemplate.constitution,
          dex: monsterTemplate.dexterity,
          inte: monsterTemplate.intelligence,
          wis: monsterTemplate.wisdom,
          cha: monsterTemplate.charisma,
          inspiration: false,
          ac: monsterTemplate.armor_class,
          speed: parseInt(monsterTemplate.speed) / 5,
          gender: "male",
          wealth: 1,
          proficiencies: [ ],
          doubleProficiencies: [ ],
          languages: [ "common" ],
          items: [ ],
          equippedItems: [],
        })
        var characterLocations = encounter.characterLocations || [];
        characterLocations.push({characterId: monsterCharacterId, x: parseInt(tokens[3]), y: parseInt(tokens[4]), type: 'character', img: klass});
        Encounters.update(eid, {$set: {characterLocations: characterLocations}});
      }
    } else if (tokens[0] == 'remove') {
      if (tokens[1] == 'wall' && tokens[2] && tokens[3]) {
        const x = parseInt(tokens[2]);
        const y = parseInt(tokens[3]);
        var objects = _.reject(encounter.objects || [], function(object) { return object.x == x && object.y == y && object.type == 'wall'});
        Encounters.update(eid, {$set: {objects: objects}});
      } else if (tokens[1] == 'character' && tokens[2] && tokens[3]) {
        const x = parseInt(tokens[2]);
        const y = parseInt(tokens[3]);
        var characterLocations = _.reject(encounter.characterLocations || [], function(loc) { return loc.x == x && loc.y == y});
        Encounters.update(eid, {$set: {characterLocations: characterLocations}});
      }
    } else if (tokens[0] == 'set') {
      if (tokens[1] == 'mode' && tokens[2]) {
        Encounters.update(eid, {$set: {mode: tokens[2]}});
      }
    } else if (tokens[0] == 'roll') {
      if (tokens[1] == 'initiative') {
        let turns = _.chain(encounter.characterLocations)
          .map(function(loc){ return Characters.findOne(loc.characterId)})
          .select(function(character) {return character;})
          .map(function(character){return {_id: character._id, roll: -1*(roll('1d20') + abilityModifier(character.dex))}})
          .sortBy('roll')
          .pluck('_id')
          .value();
        let firstCharacter = Characters.findOne(turns[0]);
        Encounters.update(eid, {$set: {currentTurn: 0, turnOrder: turns, moveStats: {movesLeft: firstCharacter.speed, hasActed: false}}});
        Characters.find({_id: {$in: turns}, userId: {$exists: true}}).forEach(function(character){
          let index = _.indexOf(turns, character._id) + 1;
          if (index == 1) {
            index += 'st';
          } else if (index == 2) {
            index += 'nd';
          } else if (index == 3) {
            index += 'rd';
          } else {
            index += 'th';
          }
          EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'Initiative rolled, you are '+index+ ' to go.'});
        })
      }
    } else if (tokens[0] == 'attack') {
      const x = parseInt(tokens[1]);
      const y = parseInt(tokens[2]);
      const cid = encounter.turnOrder[encounter.currentTurn];
      const opponentId = _.find(encounter.characterLocations, function(loc){ return loc.x == x && loc.y == y}).characterId;

      meleeAttack(encounter._id, cid, opponentId);
    } else if (tokens[0] == 'end' && tokens[1] == 'turn') {
      endTurn(eid);
    } else if (tokens[0] == 'move') {
      let currentLocation = encounter.currentCharacterLocation();
      currentLocation.x = parseInt(tokens[1]);
      currentLocation.y = parseInt(tokens[2]);
      let otherLocations = _.reject(encounter.characterLocations, function(loc){return loc.characterId == currentLocation.characterId});
      otherLocations.push(currentLocation);
      Encounters.update(eid, {$set: {characterLocations: otherLocations}});
    }
  },
  'encounters.endTurn': endTurn,
  'encounters.meleeAttack': meleeAttack,
});
