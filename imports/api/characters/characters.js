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
    return PROFICIENCY_BONUS[this.level] || 0;
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
  /*
 Sometimes a special ability or spell tells you that you have advantage or disadvantage on an ability check,
a saving throw, or an attack roll. When that happens, you roll a second d20 when you make the roll. Use the higher of the two rolls if you have advantage, and use the lower roll if you have disadvantage. For example, if you have disadvantage and roll a 17 and a 5, you use the 5. If you instead have advantage and roll those numbers, you use the 17.
If multiple situations affect a roll and each one grants advantage or im poses disadvantage on it, you don’t roll more than one additional d20. If two favorable situations grant advantage, for example, you still roll only one additional d20.
If circumstances cause a roll to have both advantage and disadvantage, you are considered to have neither of them, and you roll one d20. This is true even if multiple circumstances impose disadvantage and only one grants advantage or vice versa. In such a situation, you have neither advantage nor disadvantage.
When you have advantage or disadvantage and something in the game, such as the halfling’s Lucky trait, lets you reroll the d20, you can reroll only one of the dice. You choose which one. For example, if a halfling has advantage on an ability check and rolls a 1 and a 13, the halfling could use the Lucky trait to reroll the 1.
You usually gain advantage or disadvantage through the use of special abilities, actions, or spells. Inspiration (see chapter 4) can also give a character advantage on checks related to the character’s personality, ideals,
or bonds. The DM can also decide that circumstances influence a roll in one direction or the other and grant advantage or impose disadvantage as a result.
  */
  // returns 'advantage' 'disadvantage' or 'normal'
  hasAdvantageOrDisadvantage(rollType) {
    // const rollTypes = {'attack_roll':true, 'ability_check':true, 'saving_throw':true};
    let advantage = _.find(this.activeEffects || [], function(effect){return effect.grantsAdvantage && effect.grantsAdvantage[rollType];});
    let disadvantage = _.find(this.activeEffects || [], function(effect){return effect.disadvantage && effect.disadvantage[rollType];});
    if (advantage && disadvantage) return 'normal';
    if (advantage) return 'advantage';
    if (disadvantage) return 'disadvantage';
    return 'normal';
  },
  rollInitiative() {
    return roll('1d20') + abilityModifier(this.dex);
  },
  savingThrowBonus(key) {
    let bonus = abilityModifier(key);
    if (this.proficiencies[key+"_saving_throw"]) {
      bonus += this.proficiencyBonus();
    }
    return bonus;
  },
  proficientInSkill(skill) {
    return !!this.proficiencies[skill];
  },
  deathSave(direction, index) {
    return (this['death_save_'+direction] || [])[index];
  },
})

