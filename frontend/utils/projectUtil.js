var ProjectActions = require('../actions/projectActions');

var GlobeUtil = require('./globeUtil');

module.exports = {
  fetchProjects: function() {
    $.ajax({
      url: 'api/projects',
      method: 'GET',
      success: function(projects) {
        ProjectActions.receiveProjects(projects);
      },
      error: function(error) {
        alert(error.responseText);
      }
    });
  },

  setProject: function(globe, project) {
    GlobeUtil.stopAnimation();
    globe.setView([project.lat, project.lng], 2.5);
    ProjectActions.setProject(project);
  },

  createProject: function(data) {
    $.ajax({
      url: 'api/projects',
      method: 'POST',
      data: data,
      success: function(data) {
        location.reload();
      },
      error: function(error) {
        console.log(error.responseText);
      }
    })
  },

  updateProject: function(data) {
    $.ajax({
      url: 'api/projects/' + data.project.id,
      method: 'PATCH',
      data: data,
      success: function(data) {
        debugger;
        location.reload();
      },
      error: function(error) {
        console.log(error.responseText);
      }
    });
  },

  clearViewedProject: function() {
    ProjectActions.clearViewedProject();
  }
}
