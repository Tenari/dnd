import { Meteor } from 'meteor/meteor';
import { ABILITIES, attributeKeyToLabel, abilityModifier, ABILITY_SCORE_COST, ALIGNMENTS, LANGUAGES, indexFromUrl } from '../../../configs/general.js';
import { PROFICIENCIES } from '../../../configs/proficiencies';
import { RACES } from '../../../configs/races.js';
import { CLASSES } from '/imports/configs/db-classes.js';
import { SUBCLASSES } from '/imports/configs/subclasses.js';
import { TRAITS } from '/imports/configs/traits.js';
import { SPELLCASTING } from '/imports/configs/spellcasting.js';
import { SPELLS } from '/imports/configs/spells.js';
import { STARTING_EQUIPMENT } from '/imports/configs/starting-equipment.js';
import { CLASS_FEATURES } from '../../../configs/features.js';
import { BACKGROUNDS } from '../../../configs/backgrounds.js';
import { ReactiveVar } from 'meteor/reactive-var';
import './character-create.html';

import '../../components/multiselect/multiselect.js';
import '../../components/dropdown/dropdown.js';
import '../../components/item/item.js';
import '../../components/cleric-setup/cleric-setup.js';

Template.Character_create.onCreated(function(){
  const that = this;
  this.name = new ReactiveVar(null);

  this.race = new ReactiveVar(_.keys(RACES)[0]);
  this.klass = new ReactiveVar(_.keys(CLASSES)[0]);
  this.subclass = new ReactiveVar(null);

  this.proficiencies = new ReactiveVar([]);
  this.doubleProficiencies = new ReactiveVar([]);
  this.proficienciesArePicked = new ReactiveVar(false);
  this.languages = new ReactiveVar([]);
  this.items = new ReactiveVar([]);
  this.background = new ReactiveVar(_.keys(BACKGROUNDS)[0]);
  this.selectedRacialBonuses = new ReactiveVar(['str', 'dex']);

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
  canCreateCharacter(){
    const instance = Template.instance();
    const name = instance.name.get();
    return name.length > 0 && instance.buyPoints.get() == 0 && instance.proficienciesArePicked.get();
  },
  choosesSpells() {
    const key = CLASSES[Template.instance().klass.get()].spellcasting;
    return key && SPELLCASTING[key].level == 1;
  },
  spellcastingInfo() {
    const klass = CLASSES[Template.instance().klass.get()];
    const spellcasting = SPELLCASTING[klass.spellcasting];
    return spellcasting.info;
  },
  cantripCount(){
    const klass = CLASSES[Template.instance().klass.get()];
    const spellcasting = SPELLCASTING[klass.spellcasting];
    return spellcasting.details_per_level[1].cantrips;
  },
  cantripOptions() {
    const klass = CLASSES[Template.instance().klass.get()];
    return _.chain(SPELLS).select(function(spell){
      return spell.level == 0 && _.pluck(spell.classes, 'name').includes(klass.name);
    }).map(function(spell){
      return {name: spell.name, value: spell.name};
    }).value();
  },
  spellCount(){
    const klass = CLASSES[Template.instance().klass.get()];
    const race = RACES[Template.instance().race.get()];
    const spellcasting = SPELLCASTING[klass.spellcasting];
    let ability = Template.instance()[spellcasting.spellcasting_ability].get();
    if (race[spellcasting.spellcasting_ability+'_bonus']) {
      ability += race[spellcasting.spellcasting_ability+'_bonus'];
    }
    const hasMatchingChosenBonus = _.find(Template.instance().selectedRacialBonuses.get(), function(key){
      return key == spellcasting.spellcasting_ability;
    })
    if (race.choose_bonus && hasMatchingChosenBonus) {
      ability += 1;
    }
    return spellcasting.details_per_level[1].spells || (1 + abilityModifier(ability));
  },
  spellOptions() {
    const klass = CLASSES[Template.instance().klass.get()];
    return _.chain(SPELLS).select(function(spell){
      return spell.level == 1 && _.pluck(spell.classes, 'name').includes(klass.name);
    }).map(function(spell){
      return {name: spell.name, value: spell.name};
    }).value();
  },
  classFeatures() {
    const className = CLASSES[Template.instance().klass.get()].name;
    return _.select(CLASS_FEATURES, function(feature){
      return feature.level == 1 && feature.class.name == className && (!feature.subclass.key || feature.subclass.key == Template.instance().subclass.get());
    })
  },
  subclasses() {
    const klass = CLASSES[Template.instance().klass.get()];
    return klass.chooses_subclass_at_level == 1 && klass.subclasses;
  },
  raceTraits(){
    const race = RACES[Template.instance().race.get()];
    return _.map(race.traits, function(key){
      return TRAITS[key];
    })
  },
  hasRacialAbilityChoice(){
    const race = RACES[Template.instance().race.get()];
    return race.choose_bonus;
  },
  racialAbilityChoices(){
    const race = RACES[Template.instance().race.get()];
    const selected = Template.instance().selectedRacialBonuses.get();
    let arr = [];
    _.times(race.choose_bonus.count, function(i){
      arr.push(
        _.select(_.map(ABILITIES,function(obj, val){return {value: val, label: obj}}),function(ability){
          var modifiedSelected = _.clone(selected);
          modifiedSelected[i] = undefined;
          return !_.contains(modifiedSelected, ability.value) && !race[ability.value+'_bonus'];
        })
      )
    })
    console.log(arr);
    return arr;
  },
  background() {
    return BACKGROUNDS[Template.instance().background.get()];
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
    return _.map(CLASSES, function(obj, index){
      return {value: index, label: obj.name};
    })
  },
  reactiveVar(varname){
    return Template.instance()[varname].get();
  },
  proficiencies(list) {
    if (!list) {
      list = Template.instance().proficiencies.get();
    }
    return _.map(list, function(index){return PROFICIENCIES[index].name;}).join(', ');
  },
  doubleProficiencies() {
    const dp = Template.instance().doubleProficiencies.get();
    if (dp.length == 0) return false;
    return dp.join(', ');
  },
  racialBonus() {
    let str = [];
    const race = RACES[Template.instance().race.get()];
    _.each(race, function(value, key) {
      if (key == 'choose_bonus') {
        str.push("+"+value.amount+" to your choice of "+value.count+" abilities");
      } else if (key.indexOf('bonus') != -1) {
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
    if (race.choose_bonus) {
      _.each(Template.instance().selectedRacialBonuses.get(), function(abilityKey){
        if (ability.key == abilityKey) {
          bonus += ' +'+race.choose_bonus.amount+' from race';
        }
      })
    }
    return bonus;
  },
  classDescription() {
    return CLASSES[Template.instance().klass.get()].description;
  },
  classKey() {
    return CLASSES[Template.instance().klass.get()].name.toLowerCase();
  },
  raceDescription() {
    return RACES[Template.instance().race.get()].description;
  },
  raceSize() {
    return "("+RACES[Template.instance().race.get()].size + ") "+RACES[Template.instance().race.get()].size_description;
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
    return klass.proficiency_choices.length;
  },
  proficiencyChoices() {
    const klass = CLASSES[Template.instance().klass.get()];
    const race = RACES[Template.instance().race.get()];
    const list = _.union(klass.proficiency_choices, race.starting_proficiency_options || []);
    return _.map(list, function(obj, index){
      return {
        name: index,
        max: obj.choose,
        options: _.map(obj.from, function(prof){
          return {name: prof.name, value: indexFromUrl(prof)}
        }),
      }
    });
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
  itemChoices() {
    const instance = Template.instance();
    const klass = CLASSES[instance.klass.get()];
    const klassItems = STARTING_EQUIPMENT[klass.name];
    let list = [];
    for (let i =1; i <= klassItems.choices_to_make; i+=1) {
      let choices = klassItems["choice_"+i];
      let options = [];
      _.each(choices, function(choice, index){
        if (choice.choose == choice.from.length) { // not a real choice, just one option
          options.push({label: _.map(choice.from, function(itemObj){return itemObj.item.name + " ("+itemObj.quantity+")";}).join(", "), value: index})
        } else {
          _.each(choice.from, function(itemObj, itemIndex){
            options.push({label: itemObj.item.name + " ("+itemObj.quantity+")", value: ""+index+'-'+itemIndex});
          })
        }
      })
      list.push(options)
    }
    return list;
  },
  freeItems() {
    const klass = CLASSES[Template.instance().klass.get()];
    const klassItems = STARTING_EQUIPMENT[klass.name];
    const bgItems = BACKGROUNDS[Template.instance().background.get()].items;
    return _.map(_.union(klassItems.starting_equipment, bgItems), function(equipmentBlock){
      return equipmentBlock.item.name +" ("+ equipmentBlock.quantity+")"; 
    }).join(', ');
  },
  bgGp() {
    return BACKGROUNDS[Template.instance().background.get()].wealth;
  },
  backgroundItems() {
    return _.map(BACKGROUNDS[Template.instance().background.get()].items, function(item){
      return item.item.name + " ("+item.quantity+")";
    }).join(", ");
  },
  subclassSpells() {
    console.log(Template.instance().subclass.get());
    const subclass = SUBCLASSES[Template.instance().subclass.get()];
    console.log(subclass);
    return subclass && subclass.spells && subclass.spells[1];
  }
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
  const klassProfs = (klass && _.map(klass.proficiencies, indexFromUrl)) || [];
  const bgProfs = (bg && bg.proficiencies) || [];
  let profs = _.union(raceProfs, klassProfs, bgProfs);
  $('select.proficiency-select').each(function(){
    let val = $(this).val();
    _.each(val, function(index){
      profs.push(parseInt(index));
    })
  })
  return _.uniq(profs);
}
function updateProficienciesAndLanguages(instance) {
  instance.proficiencies.set(computeProficiencies(instance));

  let proficienciesArePicked = true;
  $('select.proficiency-select').each(function(){
    let val = $(this).val();
    if(!_.isArray(val) || val.length != parseInt($(this).attr('data-max'))) {
      proficienciesArePicked = false;
    }
  })
  instance.proficienciesArePicked.set(proficienciesArePicked);

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
  'change select.races'(e, instance){
    instance.race.set($(e.currentTarget).val());
    updateProficienciesAndLanguages(instance);
  },
  'change select.classes'(e, instance){
    const classKey = $(e.currentTarget).val();
    instance.klass.set(classKey);
    instance.subclass.set(CLASSES[classKey].subclasses[0] && CLASSES[classKey].subclasses[0].value);
    updateProficienciesAndLanguages(instance);
  },
  'change select.subclass'(e, instance){
    instance.subclass.set($(e.currentTarget).val());
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
  'change select.racial-abilities'(e, instance){
    instance.selectedRacialBonuses.set(_.map($('select.racial-abilities'), function(jq){ return $(jq).val()}));
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
    const klassItems = STARTING_EQUIPMENT[klass.name];

    let details = {
      name: $('input.character-name').val(),
      gender: $('select.genders').val(),
      alignment: $('select.alignments').val(),
      race: instance.race.curValue,
      klass: instance.klass.curValue,
      background: instance.background.curValue,
    };
    // ability scores
    _.each(_.keys(ABILITIES), function(key, index) {
      const raceBonus = race[key+'_bonus'] || 0;
      details[key] = instance[key].curValue + raceBonus;
    });
    // chosen proficiencies
    details.proficiencies = {};
    $('select.proficiency-select').each(function(){
      _.each($(this).val(), function(prof){
        details.proficiencies[parseInt(prof)] = 1;
      })
    })
    $('select.double-proficiency-select').each(function(){
      details.proficiencies[$(this).val()] = 2;
    })
    // chosen languages
    details.languages = [];
    $('select.language-select').each(function(){
      details.languages.push($(this).val());
    })
    details.languages = _.uniq(details.languages);
    // TODO chosen items
    details.items = [];
    let i =1;
    $('.item-choice').each(function(){
      let choice = $(this).val();
      if (choice.split("-").length > 1) {
        let first = choice.split("-")[0];
        let last = choice.split("-")[1];
        let chosenObj = klassItems["choice_"+i][first].from[last];
        details.items.push(JSON.parse(JSON.stringify(chosenObj)))
      } else {
        let chosenObj = klassItems["choice_"+i][choice];
        _.each(chosenObj.from, function(choiceObj) {
          details.items.push(JSON.parse(JSON.stringify(choiceObj)))
        })
      }
      i += 1;
    })

    Meteor.call('characters.insert', gameId, userId, details, (error) => {
      if (error) {
        alert(error.error);
      } else {
        FlowRouter.go('Game.details', {_id: gameId});
      }
    });
  }
})
