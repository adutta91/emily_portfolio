var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var TabStore = new Store(Dispatcher);

var _selectedTab = "aboutMe"

TabStore.selectedTab = function() {
  return _selectedTab;
};

TabStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'TAB_SELECTED':
      selectTab(payload.tab);
      TabStore.__emitChange();
      break;
  }
};

var selectTab = function(tab) {
  _selectedTab = tab;
}

module.exports = TabStore;
