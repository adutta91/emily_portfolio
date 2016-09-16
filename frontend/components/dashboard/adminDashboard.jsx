var React = require('react');

var DashComponents = require('../../assets/dashComponents');

var DashboardStore = require('../../stores/dashboardStore');

var ProjectList = require('../projects/projectList');
var AddProjectButton = require('./addProjectButton');

module.exports = React.createClass({

  getInitialState: function() {
    return ({
      display: "projects"
    });
  },

  componentDidMount: function() {
    this.dashboardListener = DashboardStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.dashboardListener.remove();
  },

  update: function() {
    this.setState({ display: DashboardStore.display() });
  },

  getDisplay: function() {
    return DashComponents[this.state.display];
  },

  render: function() {
    return (
      <div id="projectModal" className="adminDashboard">
        <div className="flex">
          <ProjectList />
          <AddProjectButton />
        </div>
        { this.getDisplay() }
      </div>
    )
  }
});
