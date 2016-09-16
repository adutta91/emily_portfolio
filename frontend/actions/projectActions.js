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
  },

  clearViewedProject: function() {
    Dispatcher.dispatch({
      actionType: "CLEAR_VIEWED_PROJECT",
      project: {
        title: "",
        start_date: "",
        end_date: "",
        location: "",
        collaborator: "",
        description: ""
      }
    });
  }
}
