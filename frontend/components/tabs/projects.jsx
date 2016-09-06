var React = require('react');

var ProjectInfo = require('../projects/projectInfo');
var Globe = require('../projects/globe');

var ProjectUtil = require('../../utils/projectUtil');

var Projects = React.createClass({
  componentDidMount: function() {
    this.enterTimer = window.setTimeout(this.changeClass, 250);
  },

  componentWillUnmount: function() {
    window.clearTimeout(this.enterTimer)
  },

  changeClass: function() {
    var tab = document.getElementsByClassName('hidden')[0];
    tab.classList.remove("hidden");
    tab.classList.add("loaded");
  },

  render: function() {
    return (
      <div id="projectsDisplay" className="sectionDisplay flex hidden">
        <Globe />
        <ProjectInfo />
      </div>
    )
  }
});


module.exports = Projects;
