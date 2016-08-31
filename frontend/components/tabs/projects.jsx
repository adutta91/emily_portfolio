var React = require('react');

var ProjectInfo = require('../projects/projectInfo');
var Globe = require('../projects/globe');

var ProjectUtil = require('../../utils/projectUtil');

var Projects = React.createClass({
  render: function() {
    return (
      <div id="projectsTab" className="flex">
        <Globe />
        <ProjectInfo />
      </div>
    )
  }
});


module.exports = Projects;
