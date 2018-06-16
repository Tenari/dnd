import { Meteor } from 'meteor/meteor';
import { ABILITIES, attributeKeyToLabel, ABILITY_SCORE_COST, PROFICIENCIES, ALIGNMENTS, LANGUAGES } from '../../../configs/general.js';
import { RACES } from '../../../configs/races.js';
import { CLASSES } from '../../../configs/classes.js';
import { ReactiveVar } from 'meteor/reactive-var';
import './character-create.html';

import '../../components/dropdown/dropdown.js';
import '../../components/cleric-setup/cleric-setup.js';

Template.Character_create.onCreated(function(){
  this.name = new ReactiveVar(null);
  this.gender = new ReactiveVar('male');
  this.alignment = new ReactiveVar('lg');
  this.race = new ReactiveVar(null);
  this.proficiencies = new ReactiveVar([]);
  this.doubleProficiencies = new ReactiveVar([]);
  this.klass = new ReactiveVar(null);
  this.divineDomain = new ReactiveVar('knowledge'); //cleric only
  this.buyPoints = new ReactiveVar(27);
  this.languages = new ReactiveVar([]);
  let that = this;
  _.each(_.keys(ABILITIES), function(key, index) {
    that[key] = new ReactiveVar(8);
  })
})

Template.Character_create.helpers({
  classIs(compare) {
    return Template.instance().klass.get() == compare;
  },
  currentDomain() {
    return Template.instance().divineDomain.get();
  },
  genders() {
    return [{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}];
  },
  alignments() {
    return ALIGNMENTS;
  },
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
  proficiencies() {
    return _.map(Template.instance().proficiencies.get(), function(key) {
      return PROFICIENCIES[key] || key;
    }).join(', ');
  },
  doubleProficiencies() {
    return _.map(Template.instance().doubleProficiencies.get(), function(key) {
      return PROFICIENCIES[key] || key;
    }).join(', ');
  },
  racialBonus() {
    let str = [];
    const race = RACES[Template.instance().race.get()];
    _.each(race, function(value, key) {
      if (key.indexOf('bonus') != -1) {
        let attr = attributeKeyToLabel(key);
        str.push('+'+value+' to '+attr);
      }
    })
    return str.join(', ');
  },
  racialBonusFor(ability) {
    let bonus = '';
    const race = RACES[Template.instance().race.get()];
    _.each(race, function(value, key) {
      if (key.indexOf('bonus') != -1) {
        if (key.split('_')[0] == ability.key) {
          bonus += ' +'+value+' from race';
        }
      }
    })
    return bonus;
  },
  classDescription() {
    return CLASSES[Template.instance().klass.get()].description;
  },
  abilities(){
    return _.map(ABILITIES, function(label, key) {
      return {key: key, label: label};
    })
  },
  extraLanguages: extraLanguages,
  languageChoices() {
    let arr = [];
    for (let i =0; i < extraLanguages() ; i++) {
      arr.push(i);
    }
    return arr;
  },
  languages() {
    return _.map(LANGUAGES, function(label, key){return {value: key, label: label};});
  },
  extraProficiencies() {
    const klass = CLASSES[Template.instance().klass.get()];
    if (!klass) return 0;
    return klass.proficiency_options.choose;
  },
  proficiencyChoices() {
    const klass = CLASSES[Template.instance().klass.get()];
    const choicesPossible = klass.proficiency_options.choose;
    let arr = [];
    for (let i =0; i < choicesPossible ; i++) {
      arr.push(i);
    }
    return arr;
  },
  availableProficiencies() {
    const instance = Template.instance();
    const klass = CLASSES[instance.klass.get()];
    return _.map(klass.proficiency_options.choices, function(key){
      return {key: key, label: PROFICIENCIES[key] || key};
    })
  }
})

function updateProficienciesAndLanguages(instance) {
  const race = RACES[instance.race.curValue];
  const klass = CLASSES[instance.klass.curValue];
  const raceProfs = (race && race.proficiencies) || [];
  const klassProfs = (klass && klass.proficiencies) || [];
  let profs = _.union(raceProfs, klassProfs);
  instance.proficiencies.set(profs);

  let dlbProfs = [];
  $('select.double-proficiency-select').each(function(){
    dlbProfs.push($(this).val());
  })
  instance.doubleProficiencies.set(_.uniq(dlbProfs));

  const raceLangs = (race && race.languages) || [];
  instance.languages.set(_.uniq(raceLangs));
}

function extraLanguages() {
  let total = 0;
  const instance = Template.instance();
  const race = RACES[instance.race.get()];
  const klass = CLASSES[instance.klass.get()];
  _.each(race.features, function(f){
    if (f == 'extra_language') {
      total += 1;
    }
  });
  if (klass && klass.key == 'cleric') {
    _.each(klass.divine_domains[instance.divineDomain.get()].features, function(b){
      if (b == 'extra_language') {
        total += 1;
      }
    })
  }
  return total;
}

Template.Character_create.events({
  'keypress input.character-name'(e, instance){
    instance.name.set($(e.currentTarget).val());
  },
  'change select.genders'(e, instance){
    instance.gender.set($(e.currentTarget).val());
  },
  'change select.alignments'(e, instance){
    instance.alignment.set($(e.currentTarget).val());
  },
  'change select.races'(e, instance){
    instance.race.set($(e.currentTarget).val());
    updateProficienciesAndLanguages(instance);
  },
  'change select.classes'(e, instance){
    instance.klass.set($(e.currentTarget).val());
    updateProficienciesAndLanguages(instance);
  },
  'change select.divine-domain'(e, instance){
    instance.divineDomain.set($(e.currentTarget).val());
    updateProficienciesAndLanguages(instance);
  },
  'change select.language-select'(e, instance){
    const race = RACES[instance.race.get()];
    let langs = _.uniq((race && race.languages) || []);
    $('select.language-select').each(function(){
      langs.push($(this).val());
    })
    instance.languages.set(_.uniq(langs));
  },
  'change select.proficiency-select'(e, instance){
    const race = RACES[instance.race.curValue];
    const klass = CLASSES[instance.klass.curValue];
    const raceProfs = (race && race.proficiencies) || [];
    const klassProfs = (klass && klass.proficiencies) || [];
    let profs = _.union(raceProfs, klassProfs);
    $('select.proficiency-select').each(function(){
      profs.push($(this).val());
    })
    instance.proficiencies.set(_.uniq(profs));
  },
  'change select.double-proficiency-select'(e, instance){
    let profs = [];
    $('select.double-proficiency-select').each(function(){
      profs.push($(this).val());
    })
    instance.doubleProficiencies.set(_.uniq(profs));
  },
  'click button.decrement'(e,instance) {
    e.preventDefault();
    const key = $(e.currentTarget).data('key');
    const currentScore = instance[key].curValue;
    const cost = ABILITY_SCORE_COST[currentScore];
    const currentPoints = instance.buyPoints.curValue;
    if (currentScore > 8) {
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
    if (currentScore < 15 && currentPoints >= cost) {
      instance[key].set(currentScore+1);
      instance.buyPoints.set(currentPoints-cost);
    }
  },
})
