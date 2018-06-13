import { Games } from '/imports/api/games/games.js';
import { Meteor } from 'meteor/meteor';
import './create_game.html';

Template.Game_create.events({
  'submit .game-create-form'(event) {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const description = target.description;
    const password = target.password;

    Meteor.call('games.insert', name.value, description.value, password.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        FlowRouter.go('/');
      }
    });
  },
})
