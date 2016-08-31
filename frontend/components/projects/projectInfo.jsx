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

  displayProjectInfo: function() {
    if (this.state.project && this.state.project.title) {
      return (
        <div id="projectDetail" className="flex column center">
          <div id="projectHeader">
            <h1>{this.state.project.title}</h1>
            <h3>Project Location</h3>
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
