var ProjectActions = require('../actions/projectActions');

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
  }
}
