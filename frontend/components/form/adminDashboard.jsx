var React = require('react');

var DashComponents = require('../../assets/dashComponents');

var ProjectList = require('../projects/projectList');

module.exports = React.createClass({

  getInitialState: function() {
    return ({
      display: "projects"
    });
  },

  getDisplay: function() {
    debugger;
    return DashComponents[this.state.display];
  },

  render: function() {
    return (
      <div id="projectModal" className="adminDashboard">
        <ProjectList />
        { this.getDisplay() }
      </div>
    )
  }
});
