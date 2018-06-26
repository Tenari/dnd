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
});
