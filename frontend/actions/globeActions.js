var Dispatcher = require('../dispatcher');

module.exports = {
  setGlobe: function(globe) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_GLOBE",
      globe: globe
    })
  },

  stopAnimation: function() {
    Dispatcher.dispatch({
      actionType: "STOP_ANIMATION"
    });
  },

  startAnimation: function() {
    Dispatcher.dispatch({
      actionType: "START_ANIMATION"
    })
  }
};
