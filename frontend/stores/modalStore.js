var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var ModalStore = new Store(Dispatcher);

var _projectForm = false;

ModalStore.projectForm = function() {
  return _projectForm;
};

ModalStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'TOGGLE_PROJECT_MODAL':
      toggleProjectModal();
      ModalStore.__emitChange();
      break;
  }
};

var toggleProjectModal = function() {
  _projectForm = !_projectForm;
};

module.exports = ModalStore;
