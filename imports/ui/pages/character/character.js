import { ABILITIES, abilityModifier, indexFromUrl, ordinalSuffixOf, DRACONIC_ANCESTRIES } from '../../../configs/general.js';
import { CLASS_FEATURES } from '/imports/configs/features.js';
import { TRAITS } from '/imports/configs/traits.js';
import { SPELLS } from '/imports/configs/spells.js';
import { Items } from '/imports/api/items/items.js';
import { Skills } from '/imports/api/skills/skills.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import './character.html';

Template.character_sheet.onCreated(function(){
  this.subscribe('skills.all');
  if (FlowRouter.getParam('cid')) {
    this.subscribe('items.all');
    var games = this.subscribe('games.all');
    this.gameId = FlowRouter.getParam('_id');
    var characters;
    this.character = new ReactiveVar(null);
    this.autorun(() => {
      if (games.ready()) {
        if (Games.findOne(this.gameId) == undefined || Meteor.userId() == null) {
          FlowRouter.go('/');
        }
        characters = this.subscribe('game.characters', this.gameId);
        if (characters.ready()) {
          this.character.set(Characters.findOne(FlowRouter.getParam('cid')));
        }
      }
    })
  }
})

Template.characterSheet_spellRow.helpers({
  ordinal(number){return ordinalSuffixOf(number)},
});
Template.character_sheet.helpers({
  mod: abilityModifier,
  characterItems: function(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    let naiveList = _.map(character.items, function(item){
      return Items.findOne(item);
    });
    let goods = _.map(_.groupBy(naiveList, '_id'), function(list, id) {
      let item = list[0];
      if (list.length > 1) {
        item.name += (' x'+list.length);
      }
      return item;
    })
    console.log(goods);
    return goods;
  },
  character: function(){
    const instance = Template.instance();
    return instance.data.character || instance.character.get();
  },
  skills() {
    return Skills.find();
  },
  abilityScores() {
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];
    
    return _.map(ABILITIES, function(name, key){
      const modded = abilityModifier(character[key]);
      return {
        name: name,
        score: character[key],
        positive: modded >= 0,
        mod: modded,
      };
    })
  },
  attacks(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    let items =  _.select(_.map(_.uniq(character.items), function(item){
      return Items.findOne(item);
    }), function(item){
      return item.equipment_category == "Weapon";
    });

    let result = _.map(items, function(weapon){
      let range = weapon.range.normal;
      if (weapon.range.long) {
        range += '/'+weapon.range.long;
      }
      const bonus = weapon.attackBonus(character);
      return {
        name: weapon.name,
        range: range,
        positive: bonus >= 0,
        bonus: bonus,
        damage: weapon.damage.dice_count+'d'+weapon.damage.dice_value,
        damage_type: weapon.damage.damage_type.name,
        equipped: weapon.equipped(character),
      }
    });
    result.push({
      name: 'Unarmed strike',
      range: 5,
      positive: true,
      bonus: character.proficiencyBonus() + abilityModifier(character.str),
      damage: 1+abilityModifier(character.str),
      damage_type: 'Bludgeoning'
    })
    _.each(items, function(weapon){
      if (weapon.throw_range) {
        const bonus = weapon.attackBonus(character);
        result.push({
          name: 'Throw '+weapon.name,
          range: weapon.throw_range.normal + 'ft/'+weapon.throw_range.long,
          positive: bonus >= 0,
          bonus: bonus,
          damage: weapon.damage.dice_count+'d'+weapon.damage.dice_value,
          damage_type: weapon.damage.damage_type.name,
        });
      }
    })
    return result;
  },
  featuresAndTraits(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    let features = _.map(_.select(CLASS_FEATURES, function(classFeature){
      let good = classFeature.class.name == character.displayClass() && classFeature.level <= character.level;
      if (classFeature.choice) {
        good = false;
      }
      if (classFeature.needs_to_be_chosen) {
        good = good && character.featureChoices[classFeature.needs_to_be_chosen] && _.contains(character.featureChoices[classFeature.needs_to_be_chosen], classFeature.name);
      }
      return good;
    }), function(f) {f.source = "Class"; return f;});

    _.each(character.raceObj().traits, function(traitKey) {
      let trait = TRAITS[traitKey];
      trait.source = "Race";
      if (trait.chooses_ancestry) {
        trait.ancestry = character.draconicAncestry;
      }
      features.push(trait)
    })

    return features;
  },
  combatFeatures(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    let features = _.map(_.select(CLASS_FEATURES, function(classFeature){
      let good = classFeature.class.name == character.displayClass() && classFeature.level <= character.level && classFeature.combat;
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
      if (trait.combat) {
        if (trait.key == 'breath_weapon') {
          trait.desc = DRACONIC_ANCESTRIES[character.draconicAncestry].breath + ' ' + DRACONIC_ANCESTRIES[character.draconicAncestry].damage_type;
        }
        if (trait.key == 'draconic_damage_resistance') {
          trait.desc = 'You have resistance to ' + DRACONIC_ANCESTRIES[character.draconicAncestry].damage_type + ' damage';
        }
        features.push(trait)
      }
    })

    return features;
  },
  spellSlots() {
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];
    return _.map(character.spellcasting().details_per_level[character.level].slots, function(total, level){
      return {
        level: ordinalSuffixOf(level),
        total,
        remaining: total - ((character.usedSlots || {})[level] || 0)
      };
    })
  },
  preparedSpells(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];
    return _.map(character.spells.prepared, function(spell){
      let obj = _.clone(SPELLS[spell.name]);
      obj.spellcasting_ability = spell.spellcasting_ability;
      return obj;
    })
  },
  knownSpells(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];
    return _.map(character.spells.known, function(spell){
      let obj = _.clone(SPELLS[spell.name]);
      obj.spellcasting_ability = spell.spellcasting_ability;
      return obj;
    })
  },
  cantrips(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];
    return _.map(character.spells.cantrips, function(spell){
      let obj = _.clone(SPELLS[spell.name]);
      obj.spellcasting_ability = spell.spellcasting_ability;
      return obj;
    })
  },
  notAllPrepared() {
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return false;
    return !character.spellcasting().all_prepared;
  },
})

Template.character_sheet.events({
  'click button.use-spell-slot'(e, instance){
    const slot = $(e.currentTarget).attr('data-slot');
    const character = instance.data.character || instance.character.get();
    Meteor.call('characters.useSpellSlot', character._id, slot);
  },
  'click .current-hp>.score>button'(e, instance){
    let val = -1;
    if ($(e.currentTarget).hasClass('gain-hp')) {
      val = 1;
    }
    const character = instance.data.character || instance.character.get();
    Meteor.call('characters.changeHp', character._id, val);
  },
  'click .temp-hp>.score>button'(e, instance){
    let val = -1;
    if ($(e.currentTarget).hasClass('gain-hp')) {
      val = 1;
    }
    const character = instance.data.character || instance.character.get();
    Meteor.call('characters.changeTempHp', character._id, val);
  },
  'click .death-success,.death-fail'(e, instance) {
    let key = 'fail';
    if ($(e.currentTarget).hasClass('death-success')) {
      key = 'success';
    }
    const character = instance.data.character || instance.character.get();
    Meteor.call('characters.deathSavingThrow', character._id, key);
  },
  'click .reset-death-throws'(e, instance) {
    const character = instance.data.character || instance.character.get();
    Meteor.call('characters.resetDeathThrows', character._id);
  },
  'click button.equip-item'(e, instance) {
    let id = $(e.currentTarget).attr('data-item');
    const character = instance.data.character || instance.character.get();
    Meteor.call('items.equip', character._id, id);
  }
});
