// All characters-related publications

import { Meteor } from 'meteor/meteor';
import { Characters } from '../characters.js';

Meteor.publish('game.characters', function (gameId) {
  if (!this.userId) return this.ready();

  return Characters.find({gameId: gameId});
});

Meteor.publish('game.myCharacter', function (gameId) {
  if (!this.userId) return this.ready();

  return Characters.find({gameId, userId: this.userId});
});
