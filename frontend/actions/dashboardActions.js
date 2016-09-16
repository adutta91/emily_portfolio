var Dispatcher = require('../dispatcher');

module.exports = {
  resetDisplay: function(display) {
    Dispatcher.dispatch({
      actionType: 'RESET_DISPLAY',
      display: display
    })
  }
}
