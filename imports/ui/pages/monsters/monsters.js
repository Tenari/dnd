import { MonsterTemplates } from '/imports/api/monsterTemplates/monsterTemplates.js';
import '/imports/ui/components/monsterInfo/monsterInfo.js';
import './monsters.html';

Template.monsters_page.onCreated(function(){
  this.subscribe('monsterTemplates.all');
  this.search = new ReactiveVar(null);
})

Template.monsters_page.helpers({
  monsters() {
    let filter = Template.instance().search.get();
    if (filter) {
      return MonsterTemplates.find({$or: [{name: { $regex: filter, $options: 'i' }}, {challenge_rating: parseFloat(filter)}]});
    }
    return MonsterTemplates.find({},{limit: 20});
  }
})
Template.monsters_page.events({
  'keyup input[name="monster-search"]'(e, instance) {
    instance.search.set($('input[name="monster-search"]').val());
  }
})
