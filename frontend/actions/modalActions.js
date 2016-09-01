var Dispatcher = require('../dispatcher');

module.exports = {
  toggleProjectModal: function() {
    Dispatcher.dispatch({
      actionType: "TOGGLE_PROJECT_MODAL"
    });
  }
}
