var React = require('react');

var ProjectStore = require('../../stores/projectStore');
var ProjectItem = require('./projectItem');

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
          <ProjectItem key={project.title} project={project}/>
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
