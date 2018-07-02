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
  encounter() {
    return Encounters.findOne(FlowRouter.getParam('eid'));
  }
});

Template.combatEncounter.onCreated(function(){
  this.addingMonster = new ReactiveVar(false);
  this.addingWall = new ReactiveVar(false);
});

Template.combatEncounter.helpers({
  rows(){
    const e = Template.instance().data.encounter;
    if (!e) return [];
    const objects = e.objects || [];
    var result = [];
    for (let i = 0; i< e.height; i++) {
      result.push([]);
      for (let j = 0; j< e.width; j++) {
        var tile = {x: j, y: i};
        var object = _.find(objects, function(o){return o.x == j && o.y == i;});
        if (object) {
          tile[object.type] = object;
        }
        result[i].push(tile);
      }
    }
    return result;
  },
  addOptions() {
    return [{value: 'Monster', label: 'Monster'},{value: 'Wall', label: 'Wall'}];
  },
  reactiveVar(k) {
    return Template.instance()[k].get();
  }
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
  'click .wall-placer>a'(e,instance){
    
  }
})
