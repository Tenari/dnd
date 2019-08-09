// Methods related to items

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Items } from './items.js';
import { Characters } from '/imports/api/characters/characters.js';
import { calculateAC } from '/imports/configs/general.js';

Meteor.methods({
  'items.equip'(cid, item){
    let character = Characters.findOne(cid);
    const itemObj = Items.findOne(item);
    let equippedItems = Items.find({_id: {$in: character.equippedItems}}).fetch();
    let newEquippedList;
    if (itemObj.equipment_category == 'Weapon' && itemObj.isTwoHanded()) {
      newEquippedList = createNewEquippedList(equippedItems, character, item);
      Characters.update(cid, {$set: {equippedItems: newEquippedList}});
    } else {
      let handsUsed = 0;
      _.each(equippedItems, function(i) {
        if (i.armor_category == "Shield") {
          handsUsed += 1;
        }
        if (i.equipment_category == 'Weapon') {
          if (i.isTwoHanded()) {
            handsUsed += 2;
          } else {
            handsUsed += 1;
          }
        }
      })
      if (handsUsed < 2) {
        Characters.update(cid, {$push: {equippedItems: item}});
      } else {
        newEquippedList = createNewEquippedList(equippedItems, character, item);
        Characters.update(cid, {$set: {equippedItems: newEquippedList}});
      }
    }
    // refresh
    character = Characters.findOne(cid);
    equippedItems = Items.find({_id: {$in: character.equippedItems}}).fetch();
    let newAC = calculateAC(character, equippedItems);
    if (newAC != character.ac) {
      Characters.update(cid, {$set: {ac: newAC}});
    }
  },
  'items.add'(cid, name, count, weight) {
    console.log(arguments);
    let item = Items.findOne({name});
    let itemId = null;
    if (!item) {
      itemId = Items.insert({
        name,
        equipment_category: 'Misc',
        weight: weight,
        cost: {quantity: 1, unit: 'cp'},
      });
    } else {
      itemId = item._id;
    }
    _.times(count, function(){
      Characters.update(cid, {$push: {items: itemId}});
    })
  }
});

function createNewEquippedList(equippedItems, character, item) {
  let itemsToRemove = _.pluck(_.select(equippedItems, function(i) {
    return i.armor_category == "Shield" || i.equipment_category == 'Weapon';
  }), '_id');
  let newEquippedList = _.reject(character.equippedItems, function(id){return itemsToRemove.includes(id);})
  newEquippedList.push(item);
  return newEquippedList;
}
