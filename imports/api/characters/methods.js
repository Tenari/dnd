// Methods related to characters

import { Meteor } from 'meteor/meteor';
import { Games } from '../games/games.js';
import { Characters } from './characters.js';

Meteor.methods({
  'characters.insert'(gameId, userId, details) {
    if (Games.findOne(gameId)) {
      return Characters.insert({
        gameId,
        userId,
        name: details.name,
        gender: details.gender,
        alignment: details.alignment,
        race: details.race,
        klass: details.klass,
        klass_details: details.klass_details,
        str: details.str,
        con: details.con,
        dex: details.dex,
        inte: details.inte,
        wis: details.wis,
        cha: details.cha,
        proficiencies: details.proficiencies,
        doubleProficiencies: details.doubleProficiencies,
        languages: details.languages,
        items: details.items,
      });
    } else {
      return false;
    }
  },
});
