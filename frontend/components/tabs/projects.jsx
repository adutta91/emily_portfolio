var React = require('react');

var ProjectInfo = require('../projects/projectInfo');

var Projects = React.createClass({

  componentDidMount: function() {
    initialize();
  },

  render: function() {
    return (
      <div id="projectsTab" className="flex">
        <div id="earth_div"></div>
        <ProjectInfo />
      </div>
    )
  }
});

module.exports = Projects;
