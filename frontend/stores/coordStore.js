var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var CoordStore = new Store(Dispatcher);

var _coords = [];

CoordStore.coords = function() {
  return _coords;
};

CoordStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_COORDS':
      resetCoords(payload.coords);
      CoordStore.__emitChange();
      break;
  }
};

var resetCoords = function(coords) {
  _coords = coords;
}

module.exports = CoordStore;
