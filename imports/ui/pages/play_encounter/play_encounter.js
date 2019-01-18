import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import '../../components/map/map.js';
import './play_encounter.html';

Template.play_encounter.onCreated(function(){
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
  isCombat(){
    const data = Template.instance().data;
    return data.encounter && data.encounter.type == 'combat';
  },
  viewableRows(){
    const encounter = Template.instance().data.encounter;
    let objects = _.flatten([encounter.objects || [], encounter.characterLocations]);
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
})

