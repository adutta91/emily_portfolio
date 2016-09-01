var GlobeActions = require('../actions/globeActions');

module.exports = {
  setGlobe: function(globe) {
    GlobeActions.setGlobe(globe);
  },

  stopAnimation: function() {
    GlobeActions.stopAnimation();
  },

  startAnimation: function() {
    GlobeActions.startAnimation();
  }
}
