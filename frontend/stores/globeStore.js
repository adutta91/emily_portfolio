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
    case 'TOGGLE_ANIMATION':
      toggleAnimation();
      GlobeStore.__emitChange();
      break;
  }
};

var resetGlobe = function(globe) {
  _globe = globe;
};

var toggleAnimation = function() {
  _animation = !_animation;
};

module.exports = GlobeStore;
