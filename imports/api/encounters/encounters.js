// Definition of the encounters collection

import { Mongo } from 'meteor/mongo';

export const Encounters = new Mongo.Collection('encounters');

Encounters.helpers({
  currentCharacterLocation() {
    let that = this;
    return _.find(this.characterLocations, function(loc){ return loc.characterId == that.turnOrder[that.currentTurn]});
  }
})
