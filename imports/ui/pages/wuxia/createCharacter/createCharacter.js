import { Meteor } from 'meteor/meteor';
import { ABILITIES, ABILITY_SCORE_COST, FAMILY_BACKGROUND, AFFINITIES, PATHS, SECT_MASTERS, TECHNIQUE_MASTERIES } from '../../../../configs/wuxia.js';
import { TECHNIQUES } from '../../../../configs/techniques.js';
import { attributeKeyToLabel, abilityModifier, indexFromUrl } from '../../../../configs/general.js';
import { ReactiveVar } from 'meteor/reactive-var';
import './createCharacter.html';

import '../../../components/multiselect/multiselect.js';
import '../../../components/dropdown/dropdown.js';
import '../../../components/item/item.js';
import '../../../components/flavorBox/flavorBox.js';

Template.wuxia_createCharacter.onCreated(function(){
  let that = this;
  this.name = new ReactiveVar(null);

//  ['clanSize', 'familyStatus', 'hometown'].forEach((key)=>{
//    that[key] = new ReactiveVar(_.keys(FAMILY_BACKGROUND[key])[0]);
//  })

  this.clanSize = new ReactiveVar(null);
  this.familyStatus = new ReactiveVar(null);
  this.hometown = new ReactiveVar(null);
  this.firstStep = new ReactiveVar(null);

  this.affinity = new ReactiveVar(_.keys(AFFINITIES)[0]);
  this.master = new ReactiveVar(null);
  this.techniques = new ReactiveVar(['basic_strike']);

  this.items = new ReactiveVar([]);

  this.buyPoints = new ReactiveVar(21);
  this.itemFilter = new ReactiveVar('');
  this.itemsTab = new ReactiveVar(null);

  _.each(_.keys(ABILITIES), function(key, index) {
    that[key] = new ReactiveVar(0);
  })

})

const familyBgKeyLabels = (bgAttr) => {
  return _.map(FAMILY_BACKGROUND[bgAttr], function(obj, key){
    return {value: key, label: obj.label};
  })
}

const currentMaster = () => {
  return SECT_MASTERS[Template.instance().master.get()];
}

const learnableTechniques = () => {
  const path_key = currentMaster().path;
  const path_techs = PATHS[path_key].techniques;
  const knownTechs = Template.instance().techniques.get();
  return Object.values(TECHNIQUES).filter(t => {
    return t.key === TECHNIQUES.basic_strike.key || path_techs.includes(t.key);
  }).filter( t => {
    let valid = true;
    if (t.prereqs) {
      t.prereqs.forEach(pre => {
        if (pre.technique) {
          if (!knownTechs.includes(pre.technique)) {
            valid = false;
          } else if (pre.mastery && pre.mastery !== TECHNIQUE_MASTERIES.incompetent.key) {
            valid = false;
          }
        }
      })
    }
    return valid;
  });
}
Template.wuxia_createCharacter.helpers({
  clanSizes(){ return familyBgKeyLabels('clanSize') },
  familyStatuses(){ return familyBgKeyLabels('familyStatus') },
  hometowns(){ return familyBgKeyLabels('hometown') },
  firstSteps(){ return familyBgKeyLabels('firstStep') },
  backgroundDescription(attr) {
    return FAMILY_BACKGROUND[attr][Template.instance()[attr].get()].description;
  },
  backgroundBonus(attr) {
    const bonus = FAMILY_BACKGROUND[attr][Template.instance()[attr].get()].bonus;
    return "+1 to "+ABILITIES[bonus].label;
  },
  abilities(){
    return _.map(ABILITIES, function(obj) {
      return {key: obj.key, label: obj.label};
    })
  },
  backgroundBonusFor(ability) {
    const instance = Template.instance();
    let bonus = 0;
    ['clanSize', 'familyStatus', 'hometown', 'firstStep'].forEach((key)=>{
      const options = FAMILY_BACKGROUND[key];
      const choice = instance[key].get();
      const choiceData = options[choice];
      if (choiceData.bonus == ability) {
        bonus += 1;
      }
    });
    if (bonus > 0) {
      return ' +'+bonus+' from background';
    } else {
      return '';
    }
  },
  affinities(){
    return _.map(AFFINITIES, function(obj, key){
      return {value: key, label: obj.label};
    });
  },
  affinityHighlightedClass(key){
    const currentKey = Template.instance().affinity.get();
    const affinity = AFFINITIES[currentKey];
    return _.contains(affinity.bases, key) ? 'highlighted-affinity' : '';
  },
  pathsForAffinity(){
    const affinity = Template.instance().affinity.get();
    return _.select(PATHS, (obj, key) => {
      return obj.chi == affinity ? true : false;
    })
  },
  masters(){
    return _.map(SECT_MASTERS, function(obj, key){
      return {value: key, label: obj.name};
    })
  },
  masterDescription(){
    return currentMaster().label;
  },
  masterPath(){
    const path_key = currentMaster().path;
    return PATHS[path_key].label;
  },
  masterPathChi(){
    const path_key = currentMaster().path;
    return AFFINITIES[PATHS[path_key].chi].label;
  },
  genders() {
    return [{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}];
  },
  reactiveVar(varname){
    return Template.instance()[varname].get();
  },
  notReactiveVar(varname){
    return !Template.instance()[varname].get();
  },
  canCreateCharacter(){
    const instance = Template.instance();
    const name = instance.name.get();
    const points = instance.buyPoints.get();
    const master = instance.master.get();
    const techniques = instance.techniques.get();
    return name && name.length > 0 && points == 0 && master && techniques && techniques.length > 0;
  },
  // TODO limit which techniques new characters can learn by master & ?background?
  techniqueCount() {
    return learnableTechniques().length;
  },
  techniqueOptions() {
    return learnableTechniques().map((t)=> {
      return {
        name: t.label,
        value: t.key
      }
    });
  },
})

Template.wuxia_createCharacter.events({
  'keyup input.character-name'(e, instance){
    instance.name.set(e.currentTarget.value);
  },
  'change select.clanSizes'(e, instance){
    instance.clanSize.set($(e.currentTarget).val());
  },
  'change select.familyStatuses'(e, instance){
    instance.familyStatus.set($(e.currentTarget).val());
  },
  'change select.hometowns'(e, instance){
    instance.hometown.set($(e.currentTarget).val());
  },
  'change select.firstSteps'(e, instance){
    instance.firstStep.set($(e.currentTarget).val());
  },
  'click button.decrement'(e,instance) {
    e.preventDefault();
    const key = $(e.currentTarget).data('key');
    const currentScore = instance[key].curValue;
    const cost = ABILITY_SCORE_COST[currentScore];
    const currentPoints = instance.buyPoints.curValue;
    if (currentScore > 0) {
      instance[key].set(currentScore-1);
      instance.buyPoints.set(currentPoints+cost);
    }
  },
  'click button.increment'(e,instance) {
    e.preventDefault();
    const key = $(e.currentTarget).data('key');
    const currentScore = instance[key].curValue;
    const cost = ABILITY_SCORE_COST[currentScore+1];
    const currentPoints = instance.buyPoints.curValue;
    if (currentScore < 4 && currentPoints >= cost) {
      instance[key].set(currentScore+1);
      instance.buyPoints.set(currentPoints-cost);
    }
  },
  'change select.affinities'(e, instance){
    instance.affinity.set($(e.currentTarget).val());
  },
  'change select.masters'(e, instance){
    instance.master.set($(e.currentTarget).val());
  },
  'change select.technique-select'(e, instance){
    instance.techniques.set($(e.currentTarget).val());
  },
  'click button.submit-character'(e, instance) {
    e.preventDefault();
    const gameId = FlowRouter.getParam('_id');
    const userId = Meteor.userId();

    let details = {
      name: $('input.character-name').val(),
      gender: $('select.genders').val(),
      age: $('input.age').val(),
      height: $('input.height').val(),
    };
    // ability scores
    _.each(_.keys(ABILITIES), function(key, index) {
      let bonus = 0;
      ['clanSize', 'familyStatus', 'hometown', 'firstStep'].forEach((fkey)=>{
        const options = FAMILY_BACKGROUND[fkey];
        const choice = instance[fkey].get();
        const choiceData = options[choice];
        if (choiceData.bonus == ability) {
          bonus += 1;
        }
      });
      details[key] = instance[key].curValue + bonus;
    });
    // TODO rest of attributes on character

    // TODO update server side character creation
    Meteor.call('characters.insert', gameId, userId, details, (error) => {
      if (error) {
        alert(error.error);
      } else {
        FlowRouter.go('Game.details', {_id: gameId});
      }
    });
  }
})
