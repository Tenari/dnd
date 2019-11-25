import './flavorBox.html';

Template.flavorBox.onCreated(function(){
  this.editing = new ReactiveVar(false);
})
Template.flavorBox.helpers({
  editing(){
    return Template.instance().editing.get();
  },
  splitLines(string) {
    return string.split("\n");
  }
})
Template.flavorBox.events({
  'click .text'(e, instance) {
    instance.editing.set(true);
  },
  'click button.save-text'(e, instance) {
    console.log(instance.data, $(e.target).parent().find('textarea').val());
    Meteor.call('characters.saveText', FlowRouter.getParam('cid'), instance.data.field, $(e.target).parent().find('textarea').val(), function(){
      instance.editing.set(false);
    })
  }
})
