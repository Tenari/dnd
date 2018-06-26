import { Games } from '/imports/api/games/games.js';
import { Encounters } from '/imports/api/encounters/encounters.js';
import './encounter.html';


Template.Encounter.onCreated(function(){
  var games = this.subscribe('games.all');
  this.gameId = FlowRouter.getParam('_id');
  var encounters;
  this.autorun(() => {
    if (games.ready()) {
      if (Games.findOne(this.gameId) == undefined || Meteor.userId() == null) {
        FlowRouter.go('/');
      }
      encounters = this.subscribe('encounters.game', this.gameId);
    }
  })
});

Template.Encounter.helpers({
  isStory(){
    const e = Encounters.findOne(FlowRouter.getParam('eid'));
    return e && e.type == 'story';
  },
});
