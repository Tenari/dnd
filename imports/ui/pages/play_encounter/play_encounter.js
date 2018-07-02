import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import '../../components/map/map.js';
import './play_encounter.html';

Template.play_encounter.helpers({
  isCombat(){
    const data = Template.instance().data;
    console.log(data);
    return data.encounter && data.encounter.type == 'combat';
  },
  viewableRows(){
    const objects = [{type: 'character', img: 'cleric', x: 1, y: 1}];
    const encounter = Template.instance().data.encounter;
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
  turnInfo(){
    const encounter = Template.instance().data.encounter;
    if (encounter.turn) {
      if (encounter.turn.npc) {
        return 'NPC turn';
      } else {
        return Characters.find(encounter.turn.cId).name + "'s turn";
      }
    } else {
      return "turn order not yet set";
    }
  },
})
