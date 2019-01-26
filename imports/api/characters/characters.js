// Definition of the Characters collection

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { roll, abilityModifier, ALIGNMENTS, PROFICIENCY_BONUS } from '../../configs/general.js';
import { RACES } from '../../configs/races.js';
import { CLASSES } from '../../configs/classes.js';
import { Items } from '/imports/api/items/items.js';

export const Characters = new Mongo.Collection('characters');

Characters.schema = new SimpleSchema({
  gameId: {type: String},
  userId: {type: String},
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

Characters.helpers({
  proficiencyBonus() {
    return PROFICIENCY_BONUS[this.level];
  },
  displayAlignment() {
    const that = this;
    return _.find(ALIGNMENTS, function(a) {return a.value == that.alignment}).label;
  },
  displayRace() {
    return RACES[this.race].label;
  },
  displayClass() {
    return CLASSES[this.klass].label;
  },
  meleeAbilityModifier() {
    if (false) { // equipped melee weapon has finesse or thrown property
      return abilityModifier(this.dex);
    }

    return abilityModifier(this.str);
  },
  equippedWeapon() {
    return Items.findOne({_id: {$in: this.equippedItems}, equipment_category: "Weapon"});
  },
  meleeProficiencyBonus() {
    const weapon = this.equippedWeapon();
    if (weapon && weapon.weapon_range == "Melee") {
      if (weapon.proficient(this.proficiencies)) { // proficient with weapon
        return this.proficiencyBonus();
      } else {
        return 0;
      }
    } else { // unarmed
      return this.proficiencyBonus();
    }
  },
  rollDamage() {
    const weapon = this.equippedWeapon();
    if (weapon) {
      return roll(weapon.damage.dice_count + 'd' + weapon.damage.dice_value);
    } else { // unarmed
      return _.max([1 + abilityModifier(this.str), 0]);
    }
  },
})

