import { abilityModifier } from '../../../configs/general.js';
import { Items } from '/imports/api/items/items.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import './character.html';

Template.character_sheet.onCreated(function(){
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
    if (Template.instance().data.character) {
      return Items.find({_id: { $in: Template.instance().data.character.items} });
    } else if (Template.instance().character.get()) {
      return Items.find({_id: { $in: Template.instance().character.get().items} });
    } else {
      return [];
    }
  },
  character: function(){
    const instance = Template.instance();
    return instance.data.character || instance.character.get();
  }
})
