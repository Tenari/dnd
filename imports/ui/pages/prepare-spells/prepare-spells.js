import { abilityModifier } from '/imports/configs/general.js';
import { SPELLS } from '/imports/configs/spells.js';
import { Characters } from '/imports/api/characters/characters.js';
import { Games } from '/imports/api/games/games.js';
import './prepare-spells.html';

Template.character_prepare_spells.onCreated(function(){
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
          this.character.set(Characters.findOne(FlowRouter.getParam('cid')));
        }
      }
    })
  }
})

Template.character_prepare_spells.helpers({
  spellCount(){
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return 0;
    const spellcasting = character.spellcasting();
    let ability = character[spellcasting.spellcasting_ability];
    return spellcasting.details_per_level[1].spells || (1 + abilityModifier(ability));
  },
  spellbookList() {
    const instance = Template.instance();
    const character = instance.data.character || instance.character.get();
    if (!character) return [];
    return _.map(character.spells.known, function(spell) {
      spell.value = spell.name;
      return spell;
    });
  },
});

Template.character_prepare_spells.events({
  'click button'(e, instance){
    const character = instance.data.character || instance.character.get();
    const spells = $('select.prepared-spells-select').val();
    Meteor.call('characters.setPreparedSpells', character._id, spells, function(error){
      if (error) {
        alert(error.error);
      } else {
        FlowRouter.go('Character.details', {_id: character.gameId, cid: character._id});
      }
    });
  },
});
