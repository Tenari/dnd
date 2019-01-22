// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games/games.js';
import { MonsterTemplates } from '../../api/monsterTemplates/monsterTemplates.js';
import { Items } from '../../api/items/items.js';

Meteor.startup(() => {
  // if the Games collection is empty
  if (Games.find().count() === 0 && false) {
    const data = [
    ];

    data.forEach(game => Games.insert(game));
  }

  //ensure that the monsterTemplates exist
  if (MonsterTemplates.find().count() === 0) {
    let monsters = JSON.parse(Assets.getText('5e-SRD-Monsters.json'));
    _.each(monsters, function(monster) {
      MonsterTemplates.insert(monster);
    })
  }

  //load in the items
  if (Items.find().count() === 0) {
    let items = JSON.parse(Assets.getText('5e-SRD-Equipment.json'));
    _.each(items, function(item) {
      Items.insert(item);
    })
  }
});
