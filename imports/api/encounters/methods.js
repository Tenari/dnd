// Methods related to encounters

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Encounters } from './encounters.js';
import { Games } from '../games/games.js';

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
      createdAt: new Date(),
    });
  },
});

