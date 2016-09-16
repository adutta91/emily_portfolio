var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var DashboardStore = new Store(Dispatcher);

var _display = "projects";

DashboardStore.display = function() {
  return _display;
};

DashboardStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RESET_DISPLAY':
      resetDisplay(payload.display);
      DashboardStore.__emitChange();
      break;
  }
};

var resetDisplay = function(display) {
  _display = display;
}

module.exports = DashboardStore;
