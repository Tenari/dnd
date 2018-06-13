import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import { Meteor } from 'meteor/meteor';
import './game-details.html';

Template.Game_details.onCreated(function (){
  var games = this.subscribe('games.all');
  this.gameId = FlowRouter.getParam('_id');
  var characters;

  this.autorun(() => {
    if (games.ready()) {
      characters = this.subscribe('game.characters', this.gameId);
    }
  })
//  this.subscribe('characters.game');
})
Template.Game_details.helpers({
  name() {
    return Games.findOne(Template.instance().gameId).name;
  },
  characters(){
    return Characters.find();
  },
  hasCharacter() {
    return Characters.findOne({userId: Meteor.userId()});
  },
  gameId() {
    return FlowRouter.getParam('_id');
  }
})
