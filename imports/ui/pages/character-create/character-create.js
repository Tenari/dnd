import { Meteor } from 'meteor/meteor';
import { ABILITIES, attributeKeyToLabel, abilityModifier, ABILITY_SCORE_COST, PROFICIENCIES, ALIGNMENTS, LANGUAGES } from '../../../configs/general.js';
import { RACES } from '../../../configs/races.js';
import { CLASSES } from '../../../configs/classes.js';
import { FEATURES } from '../../../configs/features.js';
import { ITEMS } from '../../../configs/items.js';
import { BACKGROUNDS } from '../../../configs/backgrounds.js';
import { ReactiveVar } from 'meteor/reactive-var';
import './character-create.html';

import '../../components/dropdown/dropdown.js';
import '../../components/item/item.js';
import '../../components/cleric-setup/cleric-setup.js';

Template.Character_create.onCreated(function(){
  const that = this;
  this.name = new ReactiveVar(null);
  this.gender = new ReactiveVar('male');
  this.alignment = new ReactiveVar('lg');

  this.race = new ReactiveVar(_.keys(RACES)[0]);
  this.klass = new ReactiveVar(_.keys(CLASSES)[0]);

  this.proficiencies = new ReactiveVar([]);
  this.doubleProficiencies = new ReactiveVar([]);
  this.languages = new ReactiveVar([]);
  this.items = new ReactiveVar([]);
  this.background = new ReactiveVar(_.keys(BACKGROUNDS)[0]);

  this.divineDomain = new ReactiveVar('knowledge'); //cleric only
  this.buyPoints = new ReactiveVar(27);
  this.itemFilter = new ReactiveVar('');
  this.itemsTab = new ReactiveVar(null);

  _.each(_.keys(ABILITIES), function(key, index) {
    that[key] = new ReactiveVar(8);
  })

  updateProficienciesAndLanguages(this);
})

Template.Character_create.helpers({
  classFeatures() {
    const lvl1Features = CLASSES[Template.instance().klass.get()].features[1];
    return _.map(lvl1Features, function(key){
      return FEATURES[key] || {label: key};
    })
  },
  backgrounds() {
    return _.map(BACKGROUNDS, function(obj, value){
      return {value: value, label: obj.label};
    });
  },
  itemsTab(key){
    return Template.instance().itemsTab.get() == key;
  },
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
    const dp = Template.instance().doubleProficiencies.get();
    if (dp.length == 0) return false;
    return _.map(dp, function(key) {
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
  raceDescription() {
    return RACES[Template.instance().race.get()].description;
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
      return {value: key, label: PROFICIENCIES[key] || key};
    })
  },
  remainingWealth() {
    const instance = Template.instance();
    return remainingWealth(instance);
  },
  itemsWeight(){
    const instance = Template.instance();
    let weight = 0;
    _.each(instance.items.get(), function(itemKey){
      weight += ITEMS[itemKey].weight;
    });
    return weight;
  },
  carryingCapacity(){
    const raceStrBonus = RACES[Template.instance().race.get()].str_bonus || 0;
    return (Template.instance().str.get() + raceStrBonus) * 15;
  },
  myItems() {
    return _.map(Template.instance().items.get(), function(key){
      let obj = ITEMS[key];
      obj.key = key;
      return obj;
    });
  },
  shopItems() {
    const filter = Template.instance().itemFilter.get().toLowerCase();
    return _.select(
      _.map(ITEMS, function(obj, key){
        obj.key = key;
        return obj;
      }),
      function(item){
        return item.key.indexOf(filter) != -1 ||
               item.name.toLowerCase().indexOf(filter) != -1 ||
               item.type.indexOf(filter) != -1;
      }
    );
  },
  itemChoice() {
    const instance = Template.instance();
    const klass = CLASSES[instance.klass.get()];
    return _.map(klass.item_options, function(choicesArr) {
      return _.map(choicesArr, function(itemList, index){
        return {label: _.map(itemList, function(itemKey) {return (ITEMS[itemKey] && ITEMS[itemKey].name) || itemKey;}).join(', '), value: index};
      })
    })
  },
  freeItems() {
    const klassItems = CLASSES[Template.instance().klass.get()].items;
    const bgItems = BACKGROUNDS[Template.instance().background.get()].items;
    let arr = _.clone(klassItems);
    arr.push(bgItems);
    return _.map(_.flatten(arr), function(itemKey){
      return (ITEMS[itemKey] && ITEMS[itemKey].name) || itemKey;
    }).join(', ');
  },
  bgGp() {
    return BACKGROUNDS[Template.instance().background.get()].wealth;
  },
})

function remainingWealth(instance) {
  const klass = CLASSES[instance.klass.get()];
  let wealth = klass.wealth;
  _.each(instance.items.get(), function(itemKey){
    wealth -= ITEMS[itemKey].cost;
  });
  return wealth;
}
function computeProficiencies(instance) {
  const race = RACES[instance.race.curValue];
  const klass = CLASSES[instance.klass.curValue];
  const bg = BACKGROUNDS[instance.background.curValue];
  const raceProfs = (race && race.proficiencies) || [];
  const klassProfs = (klass && klass.proficiencies) || [];
  const bgProfs = (bg && bg.proficiencies) || [];
  let profs = _.union(raceProfs, klassProfs, bgProfs);
  $('select.proficiency-select').each(function(){
    profs.push($(this).val());
  })
  return _.uniq(profs);
}
function updateProficienciesAndLanguages(instance) {
  instance.proficiencies.set(computeProficiencies(instance));

  let dlbProfs = [];
  $('select.double-proficiency-select').each(function(){
    dlbProfs.push($(this).val());
  })
  instance.doubleProficiencies.set(_.uniq(dlbProfs));

  const race = RACES[instance.race.curValue];
  const raceLangs = (race && race.languages) || [];
  let langs = _.uniq(raceLangs);
  $('select.language-select').each(function(){
    langs.push($(this).val());
  })
  instance.languages.set(_.uniq(langs));
}

function extraLanguages() {
  let total = 0;
  const instance = Template.instance();
  const race = RACES[instance.race.get()];
  const klass = CLASSES[instance.klass.get()];
  const background = BACKGROUNDS[instance.background.get()];
  _.each(race.features, function(f){
    if (f == 'extra_language') {
      total += 1;
    }
  });
  _.each(background.features, function(f) {
    if (f == 'extra_language') {
      total += 1;
    }
  })
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
  'keyup input.character-name'(e, instance){
    instance.name.set(e.currentTarget.value);
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
    updateProficienciesAndLanguages(instance);
  },
  'change select.proficiency-select'(e, instance){
    updateProficienciesAndLanguages(instance);
  },
  'change select.background-select'(e, instance){
    instance.background.set($(e.currentTarget).val());
    updateProficienciesAndLanguages(instance);
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
  'click .item-list>li'(e, instance) {
    const key = $(e.currentTarget).attr('data-key');
    const item = ITEMS[key];
    if (item && remainingWealth(instance) >= item.cost) {
      let items = _.map(instance.items.curValue, function(a){return a});
      items.push(key);
      instance.items.set(items);
    }
  },
  'click .bought-items>li'(e, instance) {
    const key = $(e.currentTarget).attr('data-key');
    let arr = JSON.parse(JSON.stringify(instance.items.curValue));
    let index = _.indexOf(arr, key);
    arr.splice(index, 1)
    instance.items.set(arr);
  },
  'click a.items-tab'(e, instance){
    instance.itemsTab.set($(e.currentTarget).data('tab'));
  },
  'keyup input.item-filter'(e, instance) {
    instance.itemFilter.set(e.currentTarget.value);
  },
  'click button.submit-character'(e, instance) {
    e.preventDefault();
    const gameId = FlowRouter.getParam('_id');
    const userId = Meteor.userId();
    const race = RACES[instance.race.curValue];
    const klass = CLASSES[instance.klass.curValue];
    let details = {
      name: $('input.character-name').val(),
      gender: $('select.genders').val(),
      alignment: $('select.alignments').val(),
      race: $('select.races').val(),
      klass: $('select.classes').val(),
    };
    if (instance.itemsTab.curValue == 'choose') {
      let itemsArr = JSON.parse(JSON.stringify(klass.items));
      itemsArr.push(BACKGROUNDS[instance.background.curValue].items);
      let index = 0;
      $('select.item-choice').each(function(){
        itemsArr.push(klass.item_options[index][$(this).val()]);
        index += 1;
      })
      details.items = _.flatten(itemsArr);
      details.wealth = BACKGROUNDS[instance.background.curValue].wealth;
    } else {
      details.items = instance.items.curValue;
      details.wealth = remainingWealth(instance);
    }
    _.each(_.keys(ABILITIES), function(key, index) {
      const raceBonus = race[key+'_bonus'] || 0;
      details[key] = instance[key].curValue + raceBonus;
    });
    details.hp_max = klass.hp.base + abilityModifier(details.con);

    details.proficiencies = _.object(_.map(computeProficiencies(instance), function(key){return [key, 1]}));
    $('select.double-proficiency-select').each(function(){
      details.proficiencies[$(this).val()] = 2;
    })

    const raceLangs = (race && race.languages) || [];
    let langs = _.uniq(raceLangs);
    $('select.language-select').each(function(){
      langs.push($(this).val());
    })
    details.languages = _.uniq(langs);

    details.background = instance.background.curValue;

    details.speed = race.speed;

    Meteor.call('characters.insert', gameId, userId, details, (error) => {
      if (error) {
        alert(error.error);
      } else {
        FlowRouter.go('Game.details', {_id: gameId});
      }
    });
  }
})
