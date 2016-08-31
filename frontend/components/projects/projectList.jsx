var React = require('react');

var ProjectStore = require('../../stores/projectStore');

var ProjectList = React.createClass({

  getInitialState: function() {
    return ({
      projects: ProjectStore.projects()
    })
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  update: function() {
    this.setState({ projects: ProjectStore.projects() });
  },

  getProjects: function() {
    if (this.state.projects.length > 0) {
      return this.state.projects.map(function(project) {
        return (
          <div id="projectItem" className="flex center" key={project.title}> {project.title} </div>
        )
      });
    }
  },

  render: function() {
    return (
      <div id="projectList" className="flex">
        { this.getProjects() }
      </div>
    )
  }
});

module.exports = ProjectList;
