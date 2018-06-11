import { Games } from '/imports/api/games/games.js';
import { Meteor } from 'meteor/meteor';
import './home.html';

import '../../components/game-card/game-card.js';

Template.App_home.onCreated(function () {
  Meteor.subscribe('games.all');
});

Template.App_home.helpers({
  games() {
    return Games.find({});
  },
});
