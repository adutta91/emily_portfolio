var React = require('react');

var ProjectStore = require('../../stores/projectStore');

var ProjectInfo = React.createClass({
  getInitialState: function() {
    return ({
      project: null
    });
  },

  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  update: function() {
    this.setState({ project: ProjectStore.viewedProject() });
  },

  getCollaborators: function() {
    if (this.state.project.collaborator.length > 0) {
      return (
        <h3 className="margin">Collaborators: {this.state.project.collaborator}</h3>
      )
    } else {
      return (
        <h3 className="margin"></h3>
      )
    }
  },

  displayProjectInfo: function() {
    if (this.state.project && this.state.project.title) {
      return (
        <div id="projectDetail" className="flex column center">
          <div id="projectHeader" className="flex column">
            <h1 className="margin">{this.state.project.title}</h1>
            {this.getCollaborators()}
            <h3 className="margin">{this.state.project.location}</h3>
            <h5 className="margin">{this.state.project.start_date} - {this.state.project.end_date}</h5>
          </div>
          <p id="projectDescription">
            {this.state.project.description}
          </p>
        </div>
      )
    } else {
      return (
        <p className="flex center" id="projectPrompt">
          Choose a project!
        </p>
      )
    }
  },

  render: function() {
    return this.displayProjectInfo();
  }
});

module.exports = ProjectInfo;
