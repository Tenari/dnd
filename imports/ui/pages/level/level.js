import { ABILITIES, abilityModifier, indexFromUrl, ordinalSuffixOf, DRACONIC_ANCESTRIES } from '../../../configs/general.js';
import { CLASS_FEATURES } from '/imports/configs/features.js';
import { SPELLS } from '/imports/configs/spells.js';
import { SUBCLASSES } from '/imports/configs/subclasses.js';
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
    this.subclass = new ReactiveVar(null);
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
            console.log(character.classObj().subclasses[0].value);
            this.subclass.set(character.subclass || character.classObj().subclasses[0].value);
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
  newPrepareableCount(){
    return !getSpellcasting().all_prepared && getCharacter().prepareableSpellCount(getCharacter().level+1);
  },
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
    if (details[1].spells) {
      return details[character.level].spells < details[character.level + 1].spells;
    } else if (details[1].spellbook) {
      return details[character.level].spellbook < details[character.level + 1].spellbook;
    }
  },
  knowsAllAndAccessMore(){
    const character = getCharacter();
    const sp = getSpellcasting();
    return sp && sp.all_known &&
           _.max(_.keys(sp.details_per_level[character.level + 1].slots)) > _.max(_.keys(sp.details_per_level[character.level].slots));
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
    if (spellcasting.details_per_level[1].spells) {
      return spellcasting.details_per_level[character.level + 1].spells - spellcasting.details_per_level[character.level].spells;
    } else if (spellcasting.details_per_level[1].spellbook) {
      return spellcasting.details_per_level[character.level + 1].spellbook - spellcasting.details_per_level[character.level].spellbook;
    }
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
    const subclass = instance.subclass.get();

    let features = _.map(_.select(CLASS_FEATURES, function(classFeature){
      let good = classFeature.class.name == character.displayClass() && classFeature.level == character.level + 1;
      if (classFeature.subclass && classFeature.subclass.key) {
        good = good && classFeature.subclass.key == subclass;
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
  choosesSubclass(){
    const character = getCharacter();
    return character.classObj().chooses_subclass_at_level == character.level+1;
  },
  subclasses(){
    return getCharacter().classObj().subclasses;
  },
  subclassDescription() {
    return SUBCLASSES[Template.instance().subclass.get()].desc;
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
    if ($('select.subclass').length > 0) {
      choices.subclass = $('select.subclass').val();
    }
    Meteor.call('characters.levelUp', character._id, choices, function(){
      FlowRouter.go('Character.details', {_id: instance.gameId, cid: character._id});
    });
  },
  'change select.subclass'(e, instance) {
    instance.subclass.set(e.target.value);
  }
});
