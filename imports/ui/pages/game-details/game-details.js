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
      if (Games.findOne(this.gameId) == undefined || Meteor.userId() == null) {
        FlowRouter.go('/');
      }
      characters = this.subscribe('game.characters', this.gameId);
    }
  })
//  this.subscribe('characters.game');
})
Template.Game_details.helpers({
  gameName() {
    return Games.findOne(Template.instance().gameId).name;
  },
  description() {
    return Games.findOne(Template.instance().gameId).description;
  },
  isWuxiaGame() {
    return Games.findOne(Template.instance().gameId).description == 'wuxia';
  },
  isDM() {
    return Meteor.userId() == Games.findOne(Template.instance().gameId).userId;
  },
  characters(){
    return Characters.find();
  },
  hasCharacter() {
    return Characters.findOne({userId: Meteor.userId()});
  },
  gameId() {
    return FlowRouter.getParam('_id');
  },
})
