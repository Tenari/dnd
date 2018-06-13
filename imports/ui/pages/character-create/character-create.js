import { Meteor } from 'meteor/meteor';
import { ABILITIES, attributeKeyToLabel, ABILITY_SCORE_COST } from '../../../configs/general.js';
import { RACES } from '../../../configs/races.js';
import { CLASSES } from '../../../configs/classes.js';
import { ReactiveVar } from 'meteor/reactive-var';
import './character-create.html';

import '../../components/dropdown/dropdown.js';

Template.Character_create.onCreated(function(){
  this.name = new ReactiveVar(null);
  this.race = new ReactiveVar(null);
  this.klass = new ReactiveVar(null);
  this.buyPoints = new ReactiveVar(22);
  this.racialAnyBonus = new ReactiveVar(null);
  let that = this;
  _.each(_.keys(ABILITIES), function(key, index) {
    that[key] = new ReactiveVar([8,10,10,10,10,10][index]);
  })
})

Template.Character_create.helpers({
  races(){
    return _.map(RACES, function(obj, key){
      return {value: key, label: obj.label};
    })
  },
  classes(){
    return _.map(CLASSES, function(obj, key){
      return {value: key, label: obj.label};
    })
  },
  reactiveVar(varname){
    return Template.instance()[varname].get();
  },
  racialBonus() {
    let str = '';
    const race = RACES[Template.instance().race.get()];
    _.each(race, function(value, key) {
      if (key.indexOf('bonus') != -1) {
        let attr = attributeKeyToLabel(key);
        str += ' +'+value+' to '+attr;
      }
    })
    return str;
  },
  racialBonusFor(ability) {
    let bonus = '';
    const race = RACES[Template.instance().race.get()];
    _.each(race, function(value, key) {
      if (key.indexOf('bonus') != -1) {
        if (key.split('_')[0] == ability.key || (key == 'any_bonus' && Template.instance().racialAnyBonus.get() == ability.key)) {
          bonus += ' +'+value+' from race';
        }
      }
    })
    return bonus;
  },
  classBonus() {
    let str = '';
    const klass = CLASSES[Template.instance().klass.get()];
    _.each(klass, function(value, key) {
      if (key.indexOf('bonus') != -1) {
        let attr = attributeKeyToLabel(key);
        str += ' +'+value+' to '+attr;
      }
    })
    return str;
  },
  abilities(){
    return _.map(ABILITIES, function(label, key) {
      return {key: key, label: label};
    })
  },
  canSelectAbility() {
    const race = RACES[Template.instance().race.get()];
    if (_.contains(_.keys(race), 'any_bonus')) {
      return true;
    } else {
      return false;
    }
  }
})

Template.Character_create.events({
  'keypress input.character-name'(e, instance){
    instance.name.set($(e.currentTarget).val());
  },
  'change select.races'(e, instance){
    instance.race.set($(e.currentTarget).val());
  },
  'change select.classes'(e, instance){
    instance.klass.set($(e.currentTarget).val());
  },
  'click button.decrement'(e,instance) {
    e.preventDefault();
    const key = $(e.currentTarget).data('key');
    const currentScore = instance[key].curValue;
    const cost = ABILITY_SCORE_COST[currentScore];
    const currentPoints = instance.buyPoints.curValue;
    let aScoreIsLessThanTen = false;
    let itIsTheOneWeAreDealingWith = false;
    _.each(_.keys(ABILITIES), function(k) {
      if (instance[k].curValue < 10) {
        aScoreIsLessThanTen = true;
        if (k == key)
          itIsTheOneWeAreDealingWith = true;
      }
    })
    if (currentScore > 10 || aScoreIsLessThanTen == false || (itIsTheOneWeAreDealingWith && currentScore > 8)) {
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
    if (currentPoints >= cost) {
      instance[key].set(currentScore+1);
      instance.buyPoints.set(currentPoints-cost);
    }
  },
  'click button.select-ability-bonus'(e,instance) {
    e.preventDefault();
    instance.racialAnyBonus.set($(e.currentTarget).data('key'));
  }
})
