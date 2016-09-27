var React = require('react');

var DashComponents = require('../../assets/componentMaps/dashComponents');

var DashboardStore = require('../../stores/dashboardStore');
var DashboardUtil = require('../../utils/dashboardUtil');
var ProjectStore = require('../../stores/projectStore');

var ProjectList = require('../projects/projectList');
var AddProjectButton = require('./addProjectButton');

module.exports = React.createClass({

  getInitialState: function() {
    return ({
      display: "intro",
    });
  },

  componentDidMount: function() {
    this.dashboardListener = DashboardStore.addListener(this.updateForm);
    this.projectListener = ProjectStore.addListener(this.updateProject);
  },

  componentWillUnmount: function() {
    this.dashboardListener.remove();
    this.projectListener.remove();
  },

  updateForm: function() {
    this.setState({ display: DashboardStore.display() });
  },

  updateProject: function() {
    // DashboardUtil.resetDisplay('editForm');
    this.setState({ display: 'editForm' })
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
