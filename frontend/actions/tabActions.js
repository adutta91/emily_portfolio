var Dispatcher = require('../dispatcher');

module.exports = {
  selectTab: function(tab) {
    Dispatcher.dispatch({
      actionType: 'TAB_SELECTED',
      tab: tab
    });
  }
}
