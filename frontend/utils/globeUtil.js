var GlobeActions = require('../actions/globeActions');

module.exports = {
  setGlobe: function(globe) {
    GlobeActions.setGlobe(globe);
  },

  toggleAnimation: function() {
    GlobeActions.toggleAnimation();
  },

  startAnimation: function() {
    GlobeActions.startAnimation();
  },

  stopAnimation: function() {
    GlobeActions.stopAnimation();
  }
}
