// Definition of the items collection

import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

Items.helpers({
  equipped(character){
    return _.contains(character.equippedItems, this._id);
  },
  proficient(proficiencies) {
    if (this.equipment_category == "Weapon") {
      if (this.weapon_category == "Simple") {
        return _.union(proficiencies, ['simple_weapon', this.name.toLowerCase()]).length > 0;
      } else if (this.weapon_category == "Martial") {
        return _.union(proficiencies, ['martial_weapon', this.name.toLowerCase()]).length > 0;
      }
    } else if (this.equipment_category == "Armor") {
      if (this.armor_category == "Light") {
        return _.union(proficiencies, ['light_armor', this.name.toLowerCase()]).length > 0;
      } else if (this.armor_category == "Medium") {
        return _.union(proficiencies, ['medium_armor', this.name.toLowerCase()]).length > 0;
      } else if (this.armor_category == "Heavy") {
        return _.union(proficiencies, ['heavy_armor', this.name.toLowerCase()]).length > 0;
      }
    }

    return false;
  }
})
