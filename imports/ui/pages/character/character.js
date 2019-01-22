import './character.html';
import { abilityModifier } from '../../../configs/general.js';
import { Items } from '/imports/api/items/items.js';

Template.character_sheet.helpers({
  mod: abilityModifier,
  characterItems: function(){
    return Items.find({_id: { $in: Template.instance().data.character.items} });
  }
})
