var React = require('react');

var DashComponents = require('../../assets/dashComponents');

var DashboardStore = require('../../stores/dashboardStore');
var ProjectStore = require('../../stores/projectStore');

var ProjectList = require('../projects/projectList');
var AddProjectButton = require('./addProjectButton');

module.exports = React.createClass({

  getInitialState: function() {
    return ({
      display: "intro"
    });
  },

  componentDidMount: function() {
    this.dashboardListener = DashboardStore.addListener(this.updateForm);
    this.projectListener = DashboardStore.addListener(this.updateProject);
  },

  componentWillUnmount: function() {
    this.dashboardListener.remove();
    this.projectListener.remove();
  },

  updateForm: function() {
    this.setState({ display: DashboardStore.display() });
  },

  updateProject: function() {
    this.setState({})
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
