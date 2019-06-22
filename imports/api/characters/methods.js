// Methods related to characters

import { Meteor } from 'meteor/meteor';
import { Games } from '../games/games.js';
import { Encounters } from '../encounters/encounters.js';
import { Items } from '../items/items.js';
import { Characters } from './characters.js';
import { abilityModifier, calculateAC, indexFromUrl } from '/imports/configs/general.js';
import { CLASSES } from '/imports/configs/db-classes.js';
import { RACES } from '/imports/configs/races.js';
import { PROFICIENCIES } from '/imports/configs/proficiencies.js';
import { BACKGROUNDS } from '/imports/configs/backgrounds.js';
import { ITEMS } from '/imports/configs/items.js';
import { STARTING_EQUIPMENT } from '/imports/configs/starting-equipment.js';

Meteor.methods({
  'characters.insert'(gameId, userId, details) {
    if (!Games.findOne(gameId)) return false;
    if (!userId == Meteor.userId()) return false; // can only make your own character
    //details: name, gender, alignment, race, class, ability_scores, background, chosen_proficiencies, chosen_languages, chosen_items
    const race = RACES[details.race];
    const klass = CLASSES[details.klass];
    const bg = BACKGROUNDS[details.background];

    const hp_max = klass.hit_die + abilityModifier(details.con);
    var charObj = {
      gameId,
      userId,
      level: 1,
      xp: 0,
      hp: hp_max,
      hp_max: hp_max,
      hitDieType: klass.hit_die,
      hitDieRemaining: 1,
      hitDieMax: 1,
      inspiration: false,
      speed: race.speed,
      wealth: bg.wealth,
      proficiencies: {}, // object of key: proficiency multiplier, so like {stealth: 1, history: 2, athletics: 1} etc
      languages: [],
      effects: [], // {name, type, duration}
      death_save_success: [],
      death_save_fail: [],
      spells: details.spells, //{cantrips, known, prepared}
    };
    // inputs
    _.each(['name','gender','alignment','race','klass','str','con','dex','inte','wis','cha','background'], function(key){
      charObj[key] = details[key];
    })
    // proficiencies
    const raceProfs = race.proficiencies || [];
    const klassProfs = _.map(klass.proficiencies, indexFromUrl) || [];
    const savingThrows = _.map(klass.saving_throws, function(saving_throw){return _.find(_.values(PROFICIENCIES), function(prof){return prof.name.match(saving_throw.name);})})
    const bgProfs = (bg && bg.proficiencies) || [];
    _.each(_.union(raceProfs, klassProfs, bgProfs), function(prof){
      charObj.proficiencies[prof] = 1;
    })
    _.each(details.proficiencies, function(multiplier, prof){
      charObj.proficiencies[prof] = multiplier;
    })
    // languages
    const raceLangs = (race && race.languages) || [];
    charObj.languages = _.uniq(_.union(raceLangs, details.languages));
    // items
    let itemNames = [];
    const klassItems = STARTING_EQUIPMENT[klass.name].starting_equipment;
    _.each(_.flatten([klassItems, bg.items, details.items]), function(equipmentBlock){
      _.times(equipmentBlock.quantity || 1, function(){
        itemNames.push(equipmentBlock.item.name);
      })
    });
    let items = Items.find({name: {$in: itemNames}}).fetch();
    items = _.compact(_.map(
      itemNames,
      function(name){
        return _.find(items, function(item){return item.name == name;})
      }
    ));
    charObj.items = _.map(items, function(item){ return item._id});
    const equippedWeapon = _.find(items, function(i){return i.equipment_category == "Weapon"});
    const equippedArmor = _.find(items, function(i){return i.equipment_category == "Armor"});
    charObj.equippedItems = _.pluck(_.compact([equippedWeapon, equippedArmor]), '_id');
    charObj.ac = calculateAC({dex: details.dex}, Items.find({_id: {$in: charObj.equippedItems}}).fetch());

    return Characters.insert(charObj);
  },
  'characters.move'(cId, direction) {
    const character = Characters.findOne(cId);
    if (!character.userId == Meteor.userId()) throw 'you cant move this character';
    const game = Games.findOne(character.gameId);
    const encounter = Encounters.findOne(game.activeEncounter);
    if (!game || !encounter) throw 'game or encounter not found';
    let characterLocation = _.find(encounter.characterLocations, function(loc){return loc.characterId == cId;});
    switch(direction) {
      case 'north':
        characterLocation.y -= 1;
        break;
      case 'south':
        characterLocation.y += 1;
        break;
      case 'east':
        characterLocation.x += 1;
        break;
      case 'west':
        characterLocation.x -= 1;
        break;
      default:
        // code block
    }
    if (characterLocation.x < 0 ||characterLocation.y < 0 ||
        characterLocation.x >= encounter.width || characterLocation.y >= encounter.height)  return false; // cant walk out of the boundaries
    var object = _.find(encounter.objects, function(obj){return obj.x == characterLocation.x && obj.y == characterLocation.y;});
    if (object && object.type == 'wall')  return false; // cant walk over walls
    if (encounter.moveStats && encounter.moveStats.movesLeft <= 0) return false; // cant move more than your speed
    if (!encounter.turnOrder || encounter.turnOrder[encounter.currentTurn] != cId) return false; // cant move unless it is your turn
    console.log('moving '+character.name+' '+direction);

    let locs = _.reject(encounter.characterLocations, function(loc) {return loc.characterId == cId;});
    locs.push(characterLocation);
    let stats = encounter.moveStats;
    stats.movesLeft -= 1;
    Encounters.update(encounter._id, {$set: {characterLocations: locs, moveStats: stats}});
  }
});
