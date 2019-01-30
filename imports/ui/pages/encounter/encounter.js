import { Games } from '/imports/api/games/games.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Encounters } from '/imports/api/encounters/encounters.js';
import { EventLogs } from '/imports/api/eventLogs/eventLogs.js';
import { MonsterTemplates } from '/imports/api/monsterTemplates/monsterTemplates.js';
import { abilityModifier, CR_TO_XP } from '/imports/configs/general.js';
import '/imports/ui/components/monsterInfo/monsterInfo.js';
import './encounter.html';


Template.Encounter.onCreated(function(){
  var games = this.subscribe('games.all');
  this.subscribe('monsterTemplates.all');
  this.gameId = FlowRouter.getParam('_id');
  this.subscribe('eventNotices.game', this.gameId);
  var encounters, characters;
  this.autorun(() => {
    if (games.ready()) {
      if (Games.findOne(this.gameId) == undefined || Meteor.userId() == null) {
        FlowRouter.go('/');
      }
      encounters = this.subscribe('encounters.game', this.gameId);
      characters = this.subscribe('game.characters', this.gameId);
    }
  })
});

Template.Encounter.helpers({
  isStory(){
    const e = Encounters.findOne(FlowRouter.getParam('eid'));
    return e && e.type == 'story';
  },
  encounter() {
    return Encounters.findOne(FlowRouter.getParam('eid'));
  }
});

/// Combat encounter

Template.combatEncounter.onCreated(function(){
  this.addingMonster = new ReactiveVar(false);
  this.addingWall = new ReactiveVar(false);
  this.commandHistory = new ReactiveVar([]);
  this.commandHistoryLocation = new ReactiveVar(1);
  this.monsterFilter = new ReactiveVar(null);
  this.ls = new ReactiveVar(null);
  this.subscribe('eventLogs.encounter', FlowRouter.getParam('eid'));
});

Template.combatEncounter.helpers({
  eventLogs() {
    return EventLogs.find();
  },
  abilityModifier(score) {return abilityModifier(score)},
  ls(key) {
    return Template.instance().ls.get() == key;
  },
  rows(){
    const e = Template.instance().data.encounter;
    if (!e) return [];
    let objects = _.flatten([e.objects, e.characterLocations]);
    var result = [];
    for (let i = 0; i< e.height; i++) {
      result.push([]);
      for (let j = 0; j< e.width; j++) {
        var tile = {x: j, y: i};
        var object = _.find(objects, function(o){return o.x == j && o.y == i;});
        if (object) {
          if (object.characterId == e.turnOrder[e.currentTurn]) { // if this thing is the active player
            object.active = true;
          }
          tile[object.type] = object;
        }
        result[i].push(tile);
      }
    }
    return result;
  },
  encounter() {
    const e = Template.instance().data.encounter;
    return e || {};
  },
  addOptions() {
    return [{value: 'Monster', label: 'Monster'},{value: 'Wall', label: 'Wall'}];
  },
  reactiveVar(k) {
    return Template.instance()[k].get();
  },
  characters(){
    const e = Template.instance().data.encounter;
    return _.sortBy(Characters.find().fetch(), function(c){ return (e && _.indexOf(e.turnOrder, c._id)) || 0;});
  },
  monsterTemplates(){
    let filter = Template.instance().monsterFilter.get();
    if (filter) {
      return MonsterTemplates.find({$or: [{name: { $regex: filter, $options: 'i' }}, {challenge_rating: parseFloat(filter)}]});
    } 
    return MonsterTemplates.find();
  },
  encounterCharLocation(character) {
    let charLocations = Template.instance().data.encounter.characterLocations;
    let loc = _.find(charLocations, function(loc){ return loc.characterId == character._id;});
    if (loc) {
      return loc.x+","+loc.y;
    } else {
      return "not placed";
    }
  },
  isTurn(id) {
    let e = Template.instance().data.encounter;
    return e && e.turnOrder[e.currentTurn] == id;
  },
  activeMonster() {
    const e = Template.instance().data.encounter;
    const id = e.turnOrder[e.currentTurn];
    const character = Characters.findOne(id);
    return character.userId ? false : MonsterTemplates.findOne({name: character.name});
  },
  gameId() {
    return FlowRouter.getParam('_id');
  },
})

Template.combatEncounter.events({
  'change input.height-input'(e,instance){
    Meteor.call('encounters.change-val', FlowRouter.getParam('eid'), $(e.currentTarget).val(), 'height', function(error){
    })
  },
  'change input.width-input'(e,instance){
    Meteor.call('encounters.change-val', FlowRouter.getParam('eid'), $(e.currentTarget).val(), 'width', function(error){
    })
  },
  'click .toolbar>a.add'(e,instance) {
    instance['adding'+$('.add-options').val()].set(!instance['adding'+$('.add-options').val()].curValue);
  },
  'keyup .commandline'(e,instance){
    if (e.keyCode == 13) { // Enter
      const command = $(e.currentTarget).val();
      var history = instance.commandHistory.curValue;
      history.push(command);
      instance.commandHistory.set(history);
      instance.commandHistoryLocation.set(1);
      if (command.split(' ')[0] == 'ls') {
        instance.ls.set(command.split(' ')[1]);
      } else {
        Meteor.call('encounters.command', FlowRouter.getParam('eid'), command, function(error) {});
      }
      $(e.currentTarget).val('');
    } else if (e.keyCode == 38) { // ArrowUp
      const index = instance.commandHistory.curValue.length - instance.commandHistoryLocation.curValue;
      if(index < 0) return null;
      $(e.currentTarget).val(instance.commandHistory.curValue[index]);
      instance.commandHistoryLocation.set(instance.commandHistoryLocation.curValue + 1);
    } else if (e.keyCode == 40) { // ArrowDown
      const index = instance.commandHistory.curValue.length - instance.commandHistoryLocation.curValue + 2;
      if(index > instance.commandHistory.curValue.length) return null;
      $(e.currentTarget).val(instance.commandHistory.curValue[index]);
      instance.commandHistoryLocation.set(instance.commandHistoryLocation.curValue - 1);
    }
  },
  'change input.monster-filter'(e,instance) {
    instance.monsterFilter.set($(e.currentTarget).val());
  },
})
