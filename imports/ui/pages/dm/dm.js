import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Encounters } from '/imports/api/encounters/encounters.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import './dm.html';

Template.Game_dm.onCreated(function(){
  this.gameId = FlowRouter.getParam('_id');
  let encounters = this.subscribe('encounters.game', this.gameId);
  let games = this.subscribe('games.all');

  this.autorun(() => {
    if (encounters.ready()) {
      
    }
  })
})

Template.Game_dm.helpers({
  encounters() {
    return Encounters.find();
  },
  activeEncounterName() {
    const game = Games.findOne(FlowRouter.getParam('_id'));
    if (!game) return '';
    return Encounters.findOne(game.activeEncounter).name;
  }
})
