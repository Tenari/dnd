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
      time: 0, // integer number of seconds in game-time since the adventure started.
      createdAt: new Date(),
    });
    const initialEncounter = Encounters.insert({
      gameId: game,
      name: 'initial story encounter',
      type: 'story',
      graphics: [],
      userId,
      createdAt: new Date(),
    });
    Games.update(game, { $set: { 'activeEncounter': initialEncounter } });
    return game;
  },
  'games.changeActiveEncounter'(gameId, newId) {
    Games.update(gameId, {$set: {activeEncounter: newId}});
  }
});
