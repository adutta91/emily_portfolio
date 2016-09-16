var React = require('react');

var ProjectUtil = require('../../utils/projectUtil');

var ProjectStore = require('../../stores/projectStore');
var GlobeStore = require('../../stores/globeStore');

var ProjectItem = React.createClass({

  setProject: function() {
    ProjectUtil.setProject(GlobeStore.globe(), this.props.project);
  },

  getClassName: function() {
    if (ProjectStore.viewedProject().title === this.props.project.title) {
      return "projectItem selected"
    } else {
      return "projectItem"
    }
  },

  render: function() {
    var className = this.getClassName() + " flex center";
    return (
      <div id="projectListItem" className={className}
           onClick={this.setProject}>
          {this.props.project.title}
      </div>
    )
  }
});

module.exports = ProjectItem;
