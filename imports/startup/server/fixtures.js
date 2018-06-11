// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games/games.js';

Meteor.startup(() => {
  // if the Games collection is empty
  if (Games.find().count() === 0 && false) {
    const data = [
    ];

    data.forEach(game => Games.insert(game));
  }
});
