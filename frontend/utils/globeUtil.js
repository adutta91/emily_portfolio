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
  },

  getCoords: function(address) {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + window.geoCode.key,
      method: 'POST',
      success: function(data) {
        GlobeActions.receiveCoords(data.results[0].geometry.location)
      },
      error: function(error) {
        console.log(error.responseText);
      }
    })
  }
}
