import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/spells/spells.js';
import '../../ui/pages/monsters/monsters.js';
import '../../ui/pages/create-game/create-game.js';
import '../../ui/pages/game-details/game-details.js';
import '../../ui/pages/character-create/character-create.js';
import '../../ui/pages/encounter/encounter.js';
import '../../ui/pages/dm/dm.js';
import '../../ui/pages/character/character.js';
import '../../ui/pages/play/play.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});
FlowRouter.route('/spells', {
  name: 'spells_page',
  action() {
    BlazeLayout.render('App_body', { main: 'spells_page' });
  },
});
FlowRouter.route('/monsters', {
  name: 'monsters_page',
  action() {
    BlazeLayout.render('App_body', { main: 'monsters_page' });
  },
});
FlowRouter.route('/game/create', {
  name: 'Game.create',
  action() {
    BlazeLayout.render('App_body', { main: 'Game_create' });
  },
});
FlowRouter.route('/game/:_id', {
  name: 'Game.details',
  action() {
    BlazeLayout.render('App_body', { main: 'Game_details' });
  },
});
FlowRouter.route('/game/:_id/character/create', {
  name: 'Character.create',
  action() {
    BlazeLayout.render('App_body', { main: 'Character_create' });
  },
});
FlowRouter.route('/game/:_id/character/:cid', {
  name: 'Character.details',
  action() {
    BlazeLayout.render('App_body', { main: 'character_sheet' });
  },
});
FlowRouter.route('/game/:_id/dm-play', {
  name: 'Game.dm',
  action() {
    BlazeLayout.render('App_body', { main: 'Game_dm' });
  },
});
FlowRouter.route('/game/:_id/play', {
  name: 'Game.play',
  action() {
    BlazeLayout.render('App_body', { main: 'Game_play' });
  },
});
FlowRouter.route('/game/:_id/encounter/:eid', {
  name: 'Game.encounter',
  action() {
    BlazeLayout.render('App_body', { main: 'Encounter' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
