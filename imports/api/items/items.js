// Definition of the items collection

import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

Items.helpers({
  equipped(character){
    return _.contains(character.equippedItems, this._id);
  }
})
