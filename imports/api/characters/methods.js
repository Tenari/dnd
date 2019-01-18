// Methods related to characters

import { Meteor } from 'meteor/meteor';
import { Games } from '../games/games.js';
import { Encounters } from '../encounters/encounters.js';
import { Characters } from './characters.js';

Meteor.methods({
  'characters.insert'(gameId, userId, details) {
    if (Games.findOne(gameId)) {
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
        str: details.str,
        con: details.con,
        dex: details.dex,
        inte: details.inte,
        wis: details.wis,
        cha: details.cha,
        inspiration: false,
        ac: 10,
        initiative: 0,
        speed: 0,
        gender: details.gender,
        wealth: details.wealth,
        klass_details: details.klass_details,
        proficiencies: details.proficiencies,
        doubleProficiencies: details.doubleProficiencies,
        languages: details.languages,
        items: details.items,
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

    let locs = _.reject(encounter.characterLocations, function(loc) {return loc.characterId == cId;});
    locs.push(characterLocation);
    Encounters.update(encounter._id, {$set: {characterLocations: locs}});
  }
});
