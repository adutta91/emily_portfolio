var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var ProjectStore = new Store(Dispatcher);

var _projects = [];

ProjectStore.projects = function() {
  return _projects;
};

ProjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_PROJECTS':
      resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;
  }
};

var resetProjects = function(projects) {
  _projects = projects;
}

module.exports = ProjectStore;
