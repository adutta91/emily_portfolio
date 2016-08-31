var React = require('react');

var ProjectInfo = require('../projects/projectInfo');
var Globe = require('../projects/globe');

var ProjectUtil = require('../../utils/projectUtil');
var ProjectStore = require('../../stores/projectStore');

var Projects = React.createClass({

  getInitialState: function() {
    return ({
      projects: ProjectStore.projects()
    })
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this.update);
    ProjectUtil.fetchProjects();
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  update: function() {
    this.setState({ projects: ProjectStore.projects() });
  },

  render: function() {
    return (
      <div id="projectsTab" className="flex">
        <Globe markers={this.state.projects} />
        <ProjectInfo />
      </div>
    )
  }
});


module.exports = Projects;
