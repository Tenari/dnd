import 'chosen-js';
import './multiselect.html';

Template.multiselect.onRendered(function(){
  this.$('select').chosen({
    disable_search: true,
    max_selected_options: this.data.max,
    width: '90%',
  })
  this.autorun(() => {
    let max = Template.currentData().max;
    let that = this;
    window.setTimeout(function(){
      that.$('select').chosen('destroy');
      that.$('select').chosen({
        disable_search: true,
        max_selected_options: max,
        width: '90%',
      })
      //that.$('select').trigger('chosen:updated');
    }, 10);
  })
})
