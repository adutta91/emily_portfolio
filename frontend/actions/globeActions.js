var Dispatcher = require('../dispatcher');

module.exports = {
  setGlobe: function(globe) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_GLOBE",
      globe: globe
    })
  }
};
