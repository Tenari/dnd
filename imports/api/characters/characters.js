// Definition of the Characters collection

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'aldeed:simple-schema';

export const Characters = new Mongo.Collection('characters');

Characters.schema = new SimpleSchema({
  gameId: {type: String},
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
