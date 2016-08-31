var React = require('react');

var ProjectInfo = require('../projects/projectInfo');
var Globe = require('../projects/globe');

var ProjectUtil = require('../../utils/projectUtil');

var Projects = React.createClass({
  componentDidMount: function() {
    var tab = document.getElementsByClassName('displayTab')[0];
    tab.classList.add("loaded");
  },

  componentWillUnmount: function() {
    var tab = document.getElementsByClassName('loaded')[0];
    tab.classList.remove("loaded");
  },

  render: function() {
    return (
      <div id="projectsTab" className="flex displayTab">
        <Globe />
        <ProjectInfo />
      </div>
    )
  }
});


module.exports = Projects;
