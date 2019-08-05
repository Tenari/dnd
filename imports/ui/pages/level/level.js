import { ABILITIES, abilityModifier, indexFromUrl, ordinalSuffixOf, DRACONIC_ANCESTRIES } from '../../../configs/general.js';
import { CLASS_FEATURES } from '/imports/configs/features.js';
import { SPELLS } from '/imports/configs/spells.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import './level.html';

Template.level_up.onCreated(function(){
  this.subscribe('skills.all');
  if (FlowRouter.getParam('cid')) {
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
          let character = Characters.findOne(FlowRouter.getParam('cid'));
          if (character.needsToLevelUp()) {
            this.character.set(character);
          } else {
            FlowRouter.go('/game/'+this.gameId);
          }
        }
      }
    })
  }
})

function getCharacter() {
  const instance = Template.instance();
  const character = instance.data.character || instance.character.get();
  return character;
}
function getSpellcasting(){
  const character = getCharacter();
  if (!character) return false;
  return character.spellcasting();
}

Template.level_up.helpers({
  hpMaxIncrease(){
    const character = getCharacter();
    return _.max([(character.classObj().hit_die / 2 + 1) + abilityModifier(character.con), 1]);
  },
  spellcasting() {
    return getSpellcasting();
  },
  choosesNewSpells() {
    const character = getCharacter();
    const details = getSpellcasting().details_per_level;
    return details[character.level].spells < details[character.level + 1].spells;
  },
  // an array of lists of spells to choose from for however many you need to choose
  spellsLists(){
  },
  spellOptions() {
    const character = getCharacter();
    const klass = character.classObj();
    const details = getSpellcasting().details_per_level;
    const spellLevel = _.max(_.keys(details[character.level + 1].slots));
    const knownSpellNames = _.pluck(character.spellsKnown(), 'name');
    return _.chain(SPELLS).select(function(spell){
      return spell.level > 0 && spell.level <= spellLevel && _.pluck(spell.classes, 'name').includes(klass.name);
    }).reject(function(spell){
      return knownSpellNames.includes(spell.name);
    }).map(function(spell){
      return {name: spell.name, value: spell.name};
    }).value();
  },
  newSpellCount() {
    const character = getCharacter();
    const spellcasting = getSpellcasting();
    return spellcasting.details_per_level[character.level + 1].spells - spellcasting.details_per_level[character.level].spells;
  },
  newSpellLevel(){
    const character = getCharacter();
    const details = getSpellcasting().details_per_level;
    return _.max(_.keys(details[character.level + 1].slots));
  },
  newFeatures(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];

    let features = _.map(_.select(CLASS_FEATURES, function(classFeature){
      let good = classFeature.class.name == character.displayClass() && classFeature.level == character.level + 1;
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

    return features;
  },
})
Template.level_up.events({
  'click button.level-up'(e, instance){
    const character = instance.data.character || instance.character.get();
    let choices = {};
    if ($('.new-spells-select').length > 0) {
      choices.newSpells = [];
      $('.new-spells-select').val().forEach(function(spellName){
        choices.newSpells.push({name: spellName, spellcasting_ability: character.spellcasting().spellcasting_ability});
      })
    }
    Meteor.call('characters.levelUp', character._id, choices, function(){
      FlowRouter.go('Character.details', {_id: instance.gameId, cid: character._id});
    });
  },
});
