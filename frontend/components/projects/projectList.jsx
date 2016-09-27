var React = require('react');

var ProjectItem = require('./projectItem');

var ProjectStore = require('../../stores/projectStore');
var GlobeStore = require('../../stores/globeStore');

var MONTHS = require('../../assets/objects/months');

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
      var projects = sortProjects(this.state.projects);
      return projects.map(function(project) {
        return (
          <ProjectItem key={project.title} project={project}/>
        )
      });
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

var sortProjects = function(projects) {
  return projects.sort(function(a, b) {
    var yearA = Number(a.start_date.split(' ')[1]);
    var yearB = Number(b.start_date.split(' ')[1]);
    var monthA = MONTHS[a.start_date.split(' ')[0].toUpperCase()];
    var monthB = MONTHS[b.start_date.split(' ')[0].toUpperCase()];

    if (yearA < yearB) {
      return -1;
    } else if (yearA > yearB) {
      return 1;
    } else if (monthA < monthB) {
      return -1;
    } else if (monthA > monthB) {
      return 1;
    } else {
      return 0;
    }

  });
};


module.exports = ProjectList;
