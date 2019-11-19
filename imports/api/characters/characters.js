// Definition of the Characters collection
// a Character record stores the current state of a character. This includes stats, hp, items, effects, actions, etc. The game logic is responsible for mutating this data correctly. The character object does not know when to remove an effect like blindness. The character will remain blind until some other aspect of the game un-blinds it.
// monsters/npcs are just character objects without a userId set

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { roll, abilityModifier, ALIGNMENTS, PROFICIENCY_BONUS, LEVELS } from '/imports/configs/general.js';
import { RACES } from '../../configs/races.js';
import { TRAITS } from '../../configs/traits.js';
import { PROFICIENCIES } from '../../configs/proficiencies.js';
import { CLASSES } from '../../configs/db-classes.js';
import { CLASS_FEATURES } from '../../configs/features.js';
import { SPELLCASTING } from '/imports/configs/spellcasting.js';
import { SPELLS } from '/imports/configs/spells.js';
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
  traits(){
    return _.map(RACES[this.race].traits, function(key) {
      return TRAITS[key];
    })
  },
  spellsKnown(){
    return _.map(this.spells.known, function(spell){
      let obj = _.clone(SPELLS[spell.name]);
      obj.spellcasting_ability = spell.spellcasting_ability;
      return obj;
    });
  },
  allProficienciesList(){
    return _.map(this.proficiencies, function(val, index){
      return PROFICIENCIES[index].name;
    }).join(', ');
  },
  skills(){
    return _.select(
      _.map(this.proficiencies, function(val, index){
        var obj = _.clone(PROFICIENCIES[index]);
        obj.multiplier = val;
        return obj;
      }),

      function(prof){
        return prof.type == 'Skills';
      }
    );
  },
  spellcasting(){
    return SPELLCASTING[this.klass];
  },
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
  raceObj() {
    return RACES[this.race];
  },
  displayClass() {
    return CLASSES[this.klass].name;
  },
  classObj() {
    return CLASSES[this.klass];
  },
  meleeAbilityModifier() {
    const weapon = this.equippedWeapon();

    if (weapon) {
      return weapon.attackAbilityModifier(this);
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
    let advantage = _.find(this.effects || [], function(effect){return effect.grantsAdvantage && effect.grantsAdvantage[rollType];});
    let disadvantage = _.find(this.effects || [], function(effect){return effect.disadvantage && effect.disadvantage[rollType];});
    if (advantage && disadvantage) return 'normal';
    if (advantage) return 'advantage';
    if (disadvantage) return 'disadvantage';
    return 'normal';
  },
  rollInitiative() {
    return roll('1d20') + this.initiativeBonus();
  },
  initiativeBonus(){
    return abilityModifier(this.dex); // + any other initiative bonuses
  },
  savingThrowBonus(key) {
    let bonus = abilityModifier(this[key]);
    let name = "Saving Throw: "+(key == 'inte' ? "INT" : key.toUpperCase());
    if (this.proficientInSkill(name)) {
      bonus += (this.proficiencyInSkill(name) * this.proficiencyBonus());
    }
    return bonus;
  },
  displaySavingThrowBonus(key) {
    const bonus = this.savingThrowBonus(key);
    return bonus >= 0 ? "+"+bonus : bonus;
  },
  proficientInSkill(skill) {
    const prof = _.find(_.values(PROFICIENCIES), function(prof){return prof.name.match(skill);});
    return !!this.proficiencies[prof && prof.index];
  },
  proficiencyInSkill(skill) {
    const prof = _.find(_.values(PROFICIENCIES), function(prof){return prof.name.match(skill);});
    return this.proficiencies[prof && prof.index];
  },
  skillMod(skill){
    let mod = abilityModifier(this[skill.ability_score.key]);
    if (this.proficientInSkill(skill.name)) {
      mod += this.proficiencyInSkill(skill.name) * this.proficiencyBonus();
    }
    if (mod >= 0) mod = "+"+mod;
    return mod;
  },
  deathSave(direction, index) {
    return (this['death_save_'+direction] || [])[index];
  },
  availableActions(params) {
    let actions = [];
    _.each(_.select(this.features(), function(feature){
      return feature.action && feature.action.key;
    }), function(feature){
      actions.push(feature.action.key);
    })
    return actions;
  },
  features(){
    const klass = CLASSES[this.klass];
    const level = this.level;
    return _.select(CLASS_FEATURES, function(feature) {
      return feature.class.level <= level && feature.class.name == klass.name;
    })
  },
  canPerformAction(key, params) {
    return this.availableActions(params)
  },
  spellSaveDC() {
    const casting = this.spellcasting();
    return 8 + this.proficiencyBonus() + abilityModifier(this[casting.spellcasting_ability]);
  },
  spellAttackMod() {
    const casting = this.spellcasting();
    const mod = this.proficiencyBonus() + abilityModifier(this[casting.spellcasting_ability]);
    if (mod > 0) {
      return "+"+mod;
    }
    return mod;
  },
  needsToLevelUp(){
    return LEVELS[this.level] <= this.xp;
  },
  prepareableSpellCount(overrideLevel){
    const sp = this.spellcasting();
    if(!sp) return false;
    const level = overrideLevel || this.level;
    // it is either hardcoded or its level+mod(spellcasting_ability)
    return sp.details_per_level[level].spells || (level + abilityModifier(this[sp.spellcasting_ability]));
  },
  featuresAndTraits(){
    const character = this;

    let features = _.map(_.select(CLASS_FEATURES, function(classFeature){
      let good = classFeature.class.name == character.displayClass() && classFeature.level <= character.level;
      if (classFeature.subclass && classFeature.subclass.key) {
        good = good && classFeature.subclass.key == character.subclass;
      }
      if (classFeature.choice) {
        good = false;
      }
      if (classFeature.needs_to_be_chosen) {
        good = good && character.featureChoices[classFeature.needs_to_be_chosen] && _.contains(character.featureChoices[classFeature.needs_to_be_chosen], classFeature.name);
      }
      return good;
    }), function(f) {f.source = "Class"; return f;});

    _.each(character.raceObj().traits, function(traitKey) {
      let trait = _.clone(TRAITS[traitKey]);
      trait.source = "Race";
      if (trait.chooses_ancestry) {
        trait.ancestry = character.draconicAncestry;
      }
      features.push(trait)
    })

    return features;
  },
})
