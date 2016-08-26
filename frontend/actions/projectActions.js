var Dispatcher = require('../dispatcher');

module.exports = {
  receiveProjects: function(projects) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_PROJECTS",
      projects: projects
    });
  }
}
