// Methods related to games

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Games } from './games.js';
import { Encounters } from '../encounters/encounters.js';

Meteor.methods({
  'games.insert'(name, description, password) {
    check(name, String);
    check(password, String);
    const userId = Meteor.userId();

    const game = Games.insert({
      name,
      password,
      description,
      userId,
      activeEncounter: '',
      createdAt: new Date(),
    });
    const initialEncounter = Encounters.insert({
      gameId: game,
      name: 'initial story encounter',
      type: 'story',
      userId,
      createdAt: new Date(),
    });
    Games.update(game, { $set: { 'activeEncounter': initialEncounter } });
    return game;
  },
});
