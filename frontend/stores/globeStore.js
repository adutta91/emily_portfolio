var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var GlobeStore = new Store(Dispatcher);

var _globe = {};
var _animation = true;

GlobeStore.globe = function() {
  return _globe;
};

GlobeStore.animation = function() {
  return _animation;
};

GlobeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_GLOBE':
      resetGlobe(payload.globe);
      GlobeStore.__emitChange();
      break;
    case 'STOP_ANIMATION':
      stopAnimation();
      GlobeStore.__emitChange();
      break;
    case 'START_ANIMATION':
      startAnimation();
      GlobeStore.__emitChange();
      break;
  }
};

var resetGlobe = function(globe) {
  _globe = globe;
};

var stopAnimation = function() {
  _animation = false;
};

var startAnimation = function() {
  _animation = true;
  var before = null;
  requestAnimationFrame(function animate(now) {
    if (_animation) {
      var c = _globe.getPosition();
      var elapsed = before ? now - before : 0;
      before = now;
      _globe.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      requestAnimationFrame(animate);
    }
  });
};

module.exports = GlobeStore;
