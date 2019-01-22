// All games-related publications

import { Meteor } from 'meteor/meteor';
import { MonsterTemplates } from './monsterTemplates.js';

Meteor.publish('monsterTemplates.all', function () {
  return MonsterTemplates.find();
});
