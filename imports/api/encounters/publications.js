// All encounters-related publications

import { Meteor } from 'meteor/meteor';
import { Encounters } from './encounters.js';

Meteor.publish('encounters.game', function (gameId) {
  return Encounters.find({gameId});
});

