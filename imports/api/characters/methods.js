// Methods related to characters

import { Meteor } from 'meteor/meteor';
import { Games } from '../games/games.js';
import { Encounters } from '../encounters/encounters.js';
import { Items } from '../items/items.js';
import { Characters } from './characters.js';
import { calculateAC } from '/imports/configs/general.js';

Meteor.methods({
  'characters.insert'(gameId, userId, details) {
    if (Games.findOne(gameId)) {
      let defaultItems = [Items.findOne({index:1})._id, Items.findOne({index: 38})._id];
      return Characters.insert({
        gameId,
        userId,
        name: details.name,
        klass: details.klass,
        level: 1,
        background: details.background,
        race: details.race,
        alignment: details.alignment,
        xp: 0,
        hp: details.hp_max,
        hp_max: details.hp_max,
        str: details.str,
        con: details.con,
        dex: details.dex,
        inte: details.inte,
        wis: details.wis,
        cha: details.cha,
        inspiration: false,
        ac: calculateAC({dex: details.dex}, Items.find({_id: {$in: defaultItems}}).fetch()),
        initiative: 0,
        speed: details.speed,
        gender: details.gender,
        wealth: details.wealth,
        klass_details: details.klass_details,
        proficiencies: details.proficiencies, // object of key: proficiency multiplier, so like {stealth: 1, history: 2, athletics: 1} etc
        languages: details.languages,
        items: defaultItems,
        equippedItems: defaultItems,
        activeEffects: [],
        death_save_success: [],
        death_save_fail: [],
      });
    } else {
      return false;
    }
  },
  'characters.move'(cId, direction) {
    const character = Characters.findOne(cId);
    const game = Games.findOne(character.gameId);
    const encounter = Encounters.findOne(game.activeEncounter);
    let characterLocation = _.find(encounter.characterLocations, function(loc){return loc.characterId == cId;});
    switch(direction) {
      case 'north':
        characterLocation.y -= 1;
        break;
      case 'south':
        characterLocation.y += 1;
        break;
      case 'east':
        characterLocation.x += 1;
        break;
      case 'west':
        characterLocation.x -= 1;
        break;
      default:
        // code block
    }
    if (characterLocation.x < 0 ||characterLocation.y < 0 ||
        characterLocation.x >= encounter.width || characterLocation.y >= encounter.height)  return false; // cant walk out of the boundaries
    var object = _.find(encounter.objects, function(obj){return obj.x == characterLocation.x && obj.y == characterLocation.y;});
    if (object && object.type == 'wall')  return false; // cant walk over walls
    if (encounter.moveStats && encounter.moveStats.movesLeft <= 0) return false; // cant move more than your speed
    if (!encounter.turnOrder || encounter.turnOrder[encounter.currentTurn] != cId) return false; // cant move unless it is your turn
    console.log('moving '+character.name+' '+direction);

    let locs = _.reject(encounter.characterLocations, function(loc) {return loc.characterId == cId;});
    locs.push(characterLocation);
    let stats = encounter.moveStats;
    stats.movesLeft -= 1;
    Encounters.update(encounter._id, {$set: {characterLocations: locs, moveStats: stats}});
  }
});
