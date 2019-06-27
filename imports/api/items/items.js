// Definition of the items collection

import { Mongo } from 'meteor/mongo';
import { abilityModifier } from '../../configs/general.js';
import { PROFICIENCIES } from '/imports/configs/proficiencies.js';

export const Items = new Mongo.Collection('items');

Items.helpers({
  equipable() {
    return _.contains(['Weapon','Armor'], this.equipment_category);
  },
  equipped(character){
    return _.contains(character.equippedItems, this._id);
  },
  proficient(proficiencies) {
    proficiencies = _.keys(proficiencies);
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
  },
  attackAbilityModifier(character) {
    let mod = 0;
    if (this.weapon_range == "Melee") {
      mod = abilityModifier(character.str);
    } else if (this.weapon_range == "Ranged") {
      mod = abilityModifier(character.dex);
    }

    if (_.find(this.properties, function(prop){return prop.name == "Finesse"})) { // this weapon has finesse property
      mod = _.max([abilityModifier(character.dex), abilityModifier(character.str)]);
    }

    return mod;
  },
  attackBonus(character) {
    let possibleProfs = [this.name.toLowerCase()];
    if (this.weapon_category == "Simple") {
      possibleProfs.push(19);
    } else if (this.weapon_category == "Martial") {
      possibleProfs.push(20);
    }

    console.log(this);
    const weaponName = this.name;
    _.each(PROFICIENCIES, function(prof, index) {
      if (prof.name == weaponName + "s") {
        possibleProfs.push(index);
      }
    })
    let profMultiplier = 0;
    _.each(possibleProfs, function(prof){
      if (character.proficiencies[prof] > profMultiplier)
        profMultiplier = character.proficiencies[prof];
    })

    return (profMultiplier * character.proficiencyBonus()) + this.attackAbilityModifier(character);
  },
  isTwoHanded(){
    return _.pluck(this.properties, 'name').includes("Two-Handed");
  },
})
