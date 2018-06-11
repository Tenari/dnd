// Methods related to games

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Games } from './games.js';

Meteor.methods({
  'games.insert'(name, password) {
    check(name, String);
    check(password, String);

    return Games.insert({
      name,
      password,
      createdAt: new Date(),
    });
  },
});
