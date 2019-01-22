import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Encounters } from '/imports/api/encounters/encounters.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import { Items } from '/imports/api/items/items.js';
import '../play_encounter/play_encounter.js';
import './play.html';

Template.Game_play.onCreated(function(){
  this.gameId = FlowRouter.getParam('_id');
  let encounters = this.subscribe('encounters.game', this.gameId);
  let characters = this.subscribe('game.myCharacter', this.gameId);
  let games = this.subscribe('games.all');
  this.subscribe('items.all');
  this.tab = new ReactiveVar('play_encounter');

  this.autorun(() => {
    if (characters.ready()) {
      if (!Characters.findOne() || Characters.findOne().userId != Meteor.userId()) {
        FlowRouter.go('/'); // not your character sheet bro
      }
    }
  })
})

Template.Game_play.helpers({
  tab() {
    return Template.instance().tab.get();
  },
  tabIs(tab) {
    return Template.instance().tab.get() == tab;
  },
  dataBlob(){
    const game = Games.findOne(FlowRouter.getParam('_id'));
    return {
      encounter: game && Encounters.findOne(game.activeEncounter),
      character: Characters.findOne(),
    }
  },
  gameId(){
    return FlowRouter.getParam('_id');
  },
  encounters() {
    return Encounters.find();
  },
  character() {
    return Characters.findOne();
  },
  activeEncounter() {
    const game = Games.findOne(FlowRouter.getParam('_id'));
    if (!game) return {};
    return Encounters.findOne(game.activeEncounter);
  },
  isActiveEncounter(id) {
    const game = Games.findOne(FlowRouter.getParam('_id'));
    if (!game) return false;
    return Encounters.findOne(game.activeEncounter)._id == id;
  },
  reactiveVar(varname){
    return Template.instance()[varname].get();
  },
})

Template.Game_play.events({
  'click .toolbar>a'(e, instance) {
    instance.tab.set($(e.currentTarget).attr('data-tab'));
  },
})
