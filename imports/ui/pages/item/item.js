import './item.html';

Template.create_item.events({
  'click button.save-new-item'(e, instance){
    Meteor.call('items.create', $('textarea.new-item-json').val(), function(error, result) {
      if (error) {
        alert(error);
      } else {
        alert('looks like it worked, item _id: '+ result);
      }
    })
  }
})
