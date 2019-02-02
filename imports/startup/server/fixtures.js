// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games/games.js';
import { MonsterTemplates } from '../../api/monsterTemplates/monsterTemplates.js';
import { Items } from '../../api/items/items.js';
import { Skills } from '../../api/skills/skills.js';

Meteor.startup(() => {
  // if the Games collection is empty
  if (Games.find().count() === 0 && false) {
    const data = [
    ];

    data.forEach(game => Games.insert(game));
  }

  //ensure that the monsterTemplates exist
  if (MonsterTemplates.find().count() === 0) {
    _.each(JSON.parse(Assets.getText('5e-SRD-Monsters.json')), function(monster) {
      MonsterTemplates.insert(monster);
    })
  }

  //load in the items
  if (Items.find().count() === 0) {
    _.each(JSON.parse(Assets.getText('5e-SRD-Equipment.json')), function(item) {
      Items.insert(item);
    })
  }

  //load in the skills
  if (Skills.find().count() === 0) {
    _.each(JSON.parse(Assets.getText('5e-SRD-Skills.json')), function(skill) {
      skill.key = skill.name.toLowerCase().split(' ').join('_');
      skill.ability_score.key = skill.ability_score.name.toLowerCase();
      if (skill.ability_score.key == 'int') skill.ability_score.key = 'inte';

      Skills.insert(skill);
    })
  }
});
