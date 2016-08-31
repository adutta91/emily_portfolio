var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var GlobeStore = new Store(Dispatcher);

var _globe = {};

GlobeStore.globe = function() {
  return _globe;
};

GlobeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_GLOBE':
      resetGlobe(payload.globe);
      GlobeStore.__emitChange();
      break;
  }
};

var resetGlobe = function(globe) {
  _globe = globe;
};

module.exports = GlobeStore;
