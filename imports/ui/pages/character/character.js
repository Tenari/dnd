import { ABILITIES, abilityModifier, indexFromUrl } from '../../../configs/general.js';
import { CLASS_FEATURES } from '/imports/configs/features.js';
import { TRAITS } from '/imports/configs/traits.js';
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

Template.character_sheet.helpers({
  mod: abilityModifier,
  characterItems: function(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    return _.map(character.items, function(item){
      return Items.findOne(item);
    });
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
  combatFeatures(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    let features = _.map(_.select(CLASS_FEATURES, function(classFeature){
      return classFeature.class.name == character.displayClass() && classFeature.level <= character.level && classFeature.combat;
    }), function(f) {f.source = "Class"; return f;});

    _.each(character.raceObj().traits, function(traitKey) {
      let trait = TRAITS[traitKey];
      trait.source = "Race";
      if (trait.combat) {
        features.push(trait)
      }
    })

    return features;
  }
})
