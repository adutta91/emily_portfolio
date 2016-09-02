var React = require('react');

var ProjectItem = require('./projectItem');

var ProjectStore = require('../../stores/projectStore');
var GlobeStore = require('../../stores/globeStore');

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

  displayButton: function() {
    if(!GlobeStore.animation()) {
      return ( <StartRotationButton /> );
    }
  },

  render: function() {
    return (
      <div id="projectListWrapper" className="flex">
        <div id="projectListBar" />
        <div id="projectList" className="flex">
          { this.getProjects() }
        </div>
        <div id="projectListBar" />
      </div>
    )
  }
});

module.exports = ProjectList;
