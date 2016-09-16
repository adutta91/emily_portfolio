var React = require('react');

var ProjectStore = require('../../stores/projectStore');
var ProjectUtil = require('../../utils/projectUtil');
var GlobeUtil = require('../../utils/globeUtil');
var CoordStore = require('../../stores/coordStore');

var ProjectForm = React.createClass({

  getInitialState: function() {
    if (this.props.new) {
      return ({
        projectTitle: "",
        projectStartDate: "",
        projectEndDate: "",
        projectLocation: "",
        projectCollaborator: "",
        projectDesc: ""
      })
    } else {
      return ({
        projectTitle: ProjectStore.viewedProject().title,
        projectStartDate: ProjectStore.viewedProject().start_date,
        projectEndDate: ProjectStore.viewedProject().end_date,
        projectLocation: ProjectStore.viewedProject().location,
        projectCollaborator: ProjectStore.viewedProject().collaborator,
        projectDesc: ProjectStore.viewedProject().description
      })
    }
  },

  onInputChange: function(event) {
    var el = event.currentTarget;
    switch(el.id) {
      case 'projectTitle':
        this.setState({ projectTitle: el.value });
        break;
      case 'projectStartDate':
        this.setState({ projectStartDate: el.value });
        break;
      case 'projectEndDate':
        this.setState({ projectEndDate: el.value });
        break;
      case 'projectLocation':
        this.setState({ projectLocation: el.value });
        break;
      case 'projectDesc':
        this.setState({ projectDesc: el.value });
        break;
      case 'projectCollaborator':
        this.setState({ projectCollaborator: el.value });
        break;
    }
  },

  submitForm: function() {
    GlobeUtil.getCoords(this.state.projectLocation);
  },

  componentDidMount: function() {
    this.coordListener = CoordStore.addListener(this.update);
    this.projectListener = ProjectStore.addListener(this.updateParams);
  },

  componentWillUnmount: function() {
    this.coordListener.remove();
    this.projectListener.remove();
  },

  updateParams: function() {
    this.setState({
      projectTitle: ProjectStore.viewedProject().title,
      projectStartDate: ProjectStore.viewedProject().start_date,
      projectEndDate: ProjectStore.viewedProject().end_date,
      projectLocation: ProjectStore.viewedProject().location,
      projectCollaborator: ProjectStore.viewedProject().collaborator,
      projectDesc: ProjectStore.viewedProject().description
    })
  },

  update: function() {
    var coords = CoordStore.coords();
    if (this.props.new) {
      var project = {
        project: {
          title: this.state.projectTitle,
          description: this.state.projectDesc,
          location: this.state.projectLocation,
          lat: coords.lat,
          lng: coords.lng,
          start_date: this.state.projectStartDate,
          end_date: this.state.projectEndDate,
          collaborator: this.state.projectCollaborator
        }
      };
      ProjectUtil.createProject(project);
    } else {
      var project = {
        project: {
          title: this.state.projectTitle,
          description: this.state.projectDesc,
          location: this.state.projectLocation,
          lat: coords.lat,
          lng: coords.lng,
          start_date: this.state.projectStartDate,
          end_date: this.state.projectEndDate,
          collaborator: this.state.projectCollaborator,
          id: ProjectStore.viewedProject().id
        }
      };
      ProjectUtil.updateProject(project);
    }
  },

  getTitle: function() {
    if (this.props.new) {
      return "Add a Project"
    } else {
      return "Edit Project"
    }
  },

  render: function() {
    return (
      <div>
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1472766011/portfolio/close.png"
             id="closeModalButton"
             onClick={this.hideModal}/>
        <h3 className="textCenter">{this.getTitle()}</h3>
        <form id="projectForm" className="flex">
           <div className="flex column">
             <input id="projectTitle" type="text" onChange={this.onInputChange} placeholder="title" value={this.state.projectTitle}/>
             <input id="projectStartDate" type="text" onChange={this.onInputChange} placeholder="start date" value={this.state.projectStartDate}/>
             <input id="projectEndDate" type="text" onChange={this.onInputChange} placeholder="end date" value={this.state.projectEndDate}/>
             <input id="projectLocation" type="text" onChange={this.onInputChange} placeholder="location" value={this.state.projectLocation}/>
             <input id="projectCollaborator" type="text" onChange={this.onInputChange} placeholder="collaborator" value={this.state.projectCollaborator}/>
             <div id="projectFormSubmit" onClick={this.submitForm}>submit!</div>
           </div>
           <textarea id="projectDesc" onChange={this.onInputChange} placeholder="description" value={this.state.projectDesc}></textarea>
        </form>
      </div>
    )
  }
});

var trimCoords = function(coord) {
  return coord.split(" ")[0];
};

module.exports = ProjectForm;
