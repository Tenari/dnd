import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import '../../components/map/map.js';
import './play_encounter.html';

Template.play_encounter.onCreated(function(){
  this.displayActions = new ReactiveVar(false);
  this.selectMeleeTarget = new ReactiveVar(false);
  var needToSet = true;
  this.autorun(() => {
    if (Template.currentData().character && needToSet) {
      needToSet = false;
      const cid = Template.currentData().character._id;
      $('body').on('keypress', function(e){
        /*  key codes
            w = 119
            s = 115
            d = 100
            a = 97
        */
        const direction = {119: 'north', 115: 'south', 100: 'east', 97: 'west'}[e.keyCode];
        Meteor.call('characters.move', cid, direction);
      });
    }
  })
})

Template.play_encounter.helpers({
  shouldDisplayActions() {
    return Template.instance().displayActions.get();
  },
  selectMeleeTarget() {
    return Template.instance().selectMeleeTarget.get();
  },
  availableActions() {
    const encounter = Template.instance().data.encounter;
    const character = Template.instance().data.character;
    if (!encounter) return null;
    let actions = [];
    let characterLocations = _.reject(encounter.characterLocations, function(loc) { return loc.characterId == character._id});
    let myLocation = _.find(encounter.characterLocations, function(loc) { return loc.characterId == character._id});
    if (_.find(characterLocations, function(loc){ let xDiff = loc.x - myLocation.x; let yDiff = loc.y - myLocation.y; return xDiff <=1 && xDiff >= -1 && yDiff <= 1 && yDiff >= -1;})) { // if there is someone to melee attack
      actions.push({name: 'Melee Attack', type: 'melee_attack'});
    }
    return actions;
  },
  isCombat(){
    const data = Template.instance().data;
    return data.encounter && data.encounter.type == 'combat';
  },
  viewableRows(){
    const encounter = Template.instance().data.encounter;
    let objects = _.flatten([encounter.objects || [], encounter.characterLocations || []]);
    var result = [];
    for (let i = 0; i< encounter.height; i++) {
      result.push([]);
      for (let j = 0; j< encounter.width; j++) {
        var tile = {};
        var object = _.find(objects, function(o){return o.x == j && o.y == i;});
        if (object) {
          tile[object.type] = object;
        }
        result[i].push(tile);
      }
    }
    return result;
  },
  mode() {
    return Template.instance().data.encounter.mode;
  },
  isMyTurn() {
    const encounter = Template.instance().data.encounter;
    const character = Template.instance().data.character;
    if (encounter.turnOrder) {
      let turnId = encounter.turnOrder[encounter.currentTurn];
      if (turnId == character._id) {
        return true;
      }
    }
    return false;
  },
  turnInfo(){
    const encounter = Template.instance().data.encounter;
    const character = Template.instance().data.character;
    if (encounter.turnOrder) {
      let turnId = encounter.turnOrder[encounter.currentTurn];
      if (turnId != character._id) {
        return 'other person\'s turn';
      } else {
        return "YOUR TURN";
      }
    } else {
      return "turn order not yet set";
    }
  },
  moveLeft() {
    return Template.instance().data.encounter.moveStats.movesLeft;
  }
})

Template.play_encounter.events({
  'click .end-turn' (e, instance){
    Meteor.call('encounters.endTurn', instance.data.encounter._id);
  },
  'click .action' (e, instance) {
    // toggle display of the list of actions available
    // [MELEE ATTACK] [RANGED ATTACK] [GRAPPLE] [DODGE] [DISENGAGE] [DASH] [HIDE] [READY] [CAST SPELL]
    instance.displayActions.set(!instance.displayActions.curValue);
  },
  'click .action-choice'(e,instance) {
    const action = $(e.currentTarget).attr('data-type');

    if (action == 'melee_attack') {
      instance.selectMeleeTarget.set(true);
    }
  },
})
