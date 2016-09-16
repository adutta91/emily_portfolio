var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var ProjectStore = new Store(Dispatcher);

var _projects = [];
var _viewedProject = {};

ProjectStore.projects = function() {
  return _projects;
};

ProjectStore.viewedProject = function() {
  return _viewedProject;
};

ProjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_PROJECTS':
      resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;
    case 'VIEW_PROJECT':
      resetViewedProject(payload.project);
      ProjectStore.__emitChange();
      break;
    case 'CLEAR_VIEWED_PROJECT':
      resetViewedProject(payload.project);
      ProjectStore.__emitChange();
      break;
  }
};

var resetProjects = function(projects) {
  _projects = projects;
};

var resetViewedProject = function(project) {
  _viewedProject = project;
}

module.exports = ProjectStore;
