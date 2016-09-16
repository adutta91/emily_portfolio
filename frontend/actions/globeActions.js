var Dispatcher = require('../dispatcher');

module.exports = {
  setGlobe: function(globe) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_GLOBE",
      globe: globe
    })
  },

  toggleAnimation: function() {
    Dispatcher.dispatch({
      actionType: 'TOGGLE_ANIMATION'
    });
  },

  startAnimation: function() {
    Dispatcher.dispatch({
      actionType: "START_ANIMATION"
    })
  },

  stopAnimation: function() {
    Dispatcher.dispatch({
      actionType: "STOP_ANIMATION"
    });
  },

  receiveCoords: function(coords) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_COORDS',
      coords: coords
    });
  }
};
