import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Encounters } from '/imports/api/encounters/encounters.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import './dm.html';

Template.Game_dm.onCreated(function(){
  this.gameId = FlowRouter.getParam('_id');
  let encounters = this.subscribe('encounters.game', this.gameId);
  let characters = this.subscribe('game.characters', this.gameId);
  let games = this.subscribe('games.all');
  this.makingNewEncounter = new ReactiveVar(false);

  this.autorun(() => {
    if (encounters.ready()) {
    }
  })
})

Template.Game_dm.helpers({
  gameId(){
    return FlowRouter.getParam('_id');
  },
  encounters() {
    return Encounters.find();
  },
  characters() {
    return Characters.find();
  },
  activeEncounterName() {
    const game = Games.findOne(FlowRouter.getParam('_id'));
    if (!game) return '';
    return Encounters.findOne(game.activeEncounter).name;
  },
  activeEncounter(id) {
    const game = Games.findOne(FlowRouter.getParam('_id'));
    if (!game) return false;
    return Encounters.findOne(game.activeEncounter)._id == id;
  },
  encounterTypes(){
    return [{value: 'story', label: 'Story'},{value:'combat', label: 'Combat'}];
  },
  reactiveVar(varname){
    return Template.instance()[varname].get();
  },
})

Template.Game_dm.events({
  'click a.new-encounter'(e, instance){
    instance.makingNewEncounter.set(!instance.makingNewEncounter.curValue);
  },
  'click button.create-encounter'(e, instance){
    const name = $('.encounter-form .encounter-name').val();
    const type = $('.encounter-form .encounter-type').val();
    if (name) {
      Meteor.call('encounters.insert', instance.gameId, name, type, (error) => {
        instance.makingNewEncounter.set(false);
      });
    }
  },
  'click button.activate-encounter'(e, instance) {
    Meteor.call('games.changeActiveEncounter', instance.gameId, $(e.currentTarget).attr('data-id'));
  },
})
