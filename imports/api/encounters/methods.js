// Methods related to encounters

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Encounters } from './encounters.js';
import { Characters } from '../characters/characters.js';
import { MonsterTemplates } from '../monsterTemplates/monsterTemplates.js';
import { EventNotices } from '../eventNotices/eventNotices.js';
import { Games } from '../games/games.js';
import { roll, abilityModifier } from '../../configs/general.js';

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
      graphics: [],
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
    }
  },
  'encounters.endTurn'(eid) {
    const encounter = Encounters.findOne(eid);
    const character = Characters.findOne(encounter.turnOrder[encounter.currentTurn]);
    let nextTurn = encounter.currentTurn + 1;
    if (nextTurn >= encounter.turnOrder.length) nextTurn = 0;
    Encounters.update(eid, {$set: {currentTurn: nextTurn, moveStats: {movesLeft: character.speed, hasActed: false}}})
  },
  'encounters.meleeAttack'(eid, cid, opponentId) {
    const encounter = Encounters.findOne(eid);
    const character = Characters.findOne(cid);
    const opponent = Characters.findOne(opponentId);
    if(encounter.gameId != character.gameId) throw 'wtf';
    if(character.userId != this.userId) throw 'wtf';

    // advantage/disadvantage ?
    // spells/special abilities/other effects ?
    // attack roll
    let hit = false;
    let crit = false;
    let attackRoll = roll('1d20');
    if (attackRoll == 20) { // crit!
      hit = true;
      crit = true;
      EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'You rolled a natural 20. You crit! Nice.'});
    } else if (attackRoll == 1) { // auto-miss
      EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'You rolled a natural 1. You miss. Noob.'});
      hit = false;
    } else {
      attackRoll += character.meleeAbilityModifier();
      attackRoll += character.meleeProficiencyBonus();
      if (attackRoll >= opponent.ac) {
        hit = true;
        EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'You hit with a modified '+attackRoll+'.'});
      } else {
        EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'You missed with a modified '+attackRoll+'.'});
      }
    }

    let damage = 0;
    if (hit) {
      if (crit) {
        damage += (character.rollDamage() + character.rollDamage() + character.meleeAbilityModifier());
      } else {
        damage += (character.rollDamage() + character.meleeAbilityModifier());
      }
      const weapon = character.equippedWeapon();
      EventNotices.insert({gameId: encounter.gameId, userId: character.userId, message: 'You rolled '+damage+' '+weapon.damage.damage_type.name+' damage.'});
      Characters.update(opponentId, {$set: {hp: opponent.hp - damage}});
    }

    Encounters.update(eid, {$set: {moveStats: {hasActed: true}}});
  }
});

