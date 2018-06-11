// Methods related to characters

import { Meteor } from 'meteor/meteor';
import { Games } from '../games/games.js';
import { Characters } from './characters.js';

Meteor.methods({
  'characters.insert'(gameId, name, race, klass, str, con, dex, inte, wis, cha) {
    if (Games.findOne(gameId)) {
      return Characters.insert({
        gameId,
        name,
        race,
        klass,
        str,
        con,
        dex,
        inte,
        wis,
        cha,
      });
    } else {
      return false;
    }
  },
});
