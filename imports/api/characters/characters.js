// Definition of the Characters collection

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ALIGNMENTS, PROFICIENCY_BONUS } from '../../configs/general.js';
import { RACES } from '../../configs/races.js';
import { CLASSES } from '../../configs/classes.js';

export const Characters = new Mongo.Collection('characters');

Characters.schema = new SimpleSchema({
  gameId: {type: String},
  userId: {type: String},
  name: {type: String},
  race: {type: String},
  klass: {type: String},
  str: {type: Number},
  con: {type: Number},
  dex: {type: Number},
  inte: {type: Number},
  wix: {type: Number},
  cha: {type: Number},
})

Characters.helpers({
  proficiencyBonus() {
    return PROFICIENCY_BONUS[this.level];
  },
  displayAlignment() {
    const that = this;
    return _.find(ALIGNMENTS, function(a) {return a.value == that.alignment}).label;
  },
  displayRace() {
    return RACES[this.race].label;
  },
  displayClass() {
    return CLASSES[this.klass].label;
  },
})

