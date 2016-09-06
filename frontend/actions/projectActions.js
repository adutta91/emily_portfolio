var Dispatcher = require('../dispatcher');

module.exports = {
  receiveProjects: function(projects) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_PROJECTS",
      projects: projects
    });
  },

  setProject: function(project) {
    Dispatcher.dispatch({
      actionType: "VIEW_PROJECT",
      project: project
    })
  }
}
