import { SPELLS } from '/imports/configs/spells.js';
import '/imports/ui/components/spell-card/spell-card.js';
import './spells.html';

Template.spells_page.onCreated(function(){
  this.search = new ReactiveVar(FlowRouter.getQueryParam('search'));
})

Template.spells_page.helpers({
  spells() {
    const search = Template.instance().search.get();
    if (search) {
      return _.select(SPELLS, function(spell){
        return spell.name.toLowerCase().match(search.toLowerCase()) || spell.level == parseInt(search);
      })
    } else {
      return _.values(SPELLS);
    }
  }
})
Template.spells_page.events({
  'keyup input[name="spell-search"]'(e, instance) {
    instance.search.set($('input[name="spell-search"]').val());
  }
})
