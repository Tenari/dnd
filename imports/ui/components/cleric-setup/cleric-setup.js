import { CLASSES } from '../../../configs/classes.js';
import { PROFICIENCIES } from '../../../configs/general.js';
import { SPELLS } from '../../../configs/spells.js';
import './cleric-setup.html';

const cleric = CLASSES.cleric;
const domains = CLASSES.cleric.divine_domains;

Template.clericSetup.helpers({
  divineDomains() {
    return _.map(domains, function(obj, key){return {value: key, label: obj.label};})
  },
  spells() {
    return domains[Template.instance().data.domain].spells[1].join(', ');
  },
  extraDoubleProficiencies() {
    const opts = domains[Template.instance().data.domain].double_proficiency_options;
    return opts && opts.choose;
  },
  proficiencyChoices() {
    const opts = domains[Template.instance().data.domain].double_proficiency_options;
    let arr = [];
    for (let i =0; i< opts.choose; i++) {
      arr.push(i);
    }
    return arr;
  },
  availableProficiencies() {
    const opts = domains[Template.instance().data.domain].double_proficiency_options;
    return _.map(opts.choices, function(key){
      return {label: PROFICIENCIES[key] || key, value: key};
    })
  },
  availableCantrips() {
    return _.map(cleric.spellcasting_details.spells[0], function(key) {
      return {value: key, label: (SPELLS[key] && SPELLS[key].label) || key};
    })
  }
  //domains[Template.instance().data.domain]
})
