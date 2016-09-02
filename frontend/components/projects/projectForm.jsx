var React = require('react');

var ProjectUtil = require('../../utils/projectUtil');

var ProjectForm = React.createClass({

  getInitialState: function() {
    return ({
      projectTitle: "",
      projectStartDate: "",
      projectEndDate: "",
      projectLocation: "",
      projectLatCoord: "",
      projectLngCoord: "",
      projectCollaborator: "",
      projectDesc: ""
    })
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
      case 'projectLatCoord':
        this.setState({ projectLatCoord: el.value });
        break;
      case 'projectLngCoord':
        this.setState({ projectLngCoord: el.value });
        break;
      case 'projectDesc':
        this.setState({ projectDesc: el.value });
        break;
    }
  },

  submitForm: function() {
    ProjectUtil.createProject({
      project: {
        title: this.state.projectTitle,
        start_date: this.state.projectStartDate,
        end_date: this.state.projectEndDate,
        location: this.state.projectLocation,
        lat: this.state.projectLatCoord,
        lng: this.state.projectLngCoord,
        collaborator: this.state.projectCollaborator,
        description: this.state.projectDesc
      }
    });
    this.props.modalCallback();
  },

  render: function() {
    return (
      <div id="projectModal">
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1472766011/portfolio/close.png"
             id="closeModalButton"
             onClick={this.hideModal}/>
        <form id="projectForm" className="flex">
           <div className="flex column">
             <input id="projectTitle" type="text" onChange={this.onInputChange} placeholder="title" value={this.state.projectTitle}/>
             <input id="projectStartDate" type="text" onChange={this.onInputChange} placeholder="start date" value={this.state.projectStartDate}/>
             <input id="projectEndDate" type="text" onChange={this.onInputChange} placeholder="end date" value={this.state.projectEndDate}/>
             <input id="projectLocation" type="text" onChange={this.onInputChange} placeholder="location" value={this.state.projectLocation}/>
             <input id="projectCollaborator" type="text" onChange={this.onInputChange} placeholder="collaborator" value={this.state.projectCollaborator}/>
             <div className="flex center" id="coordsForm">
               <input id="projectLatCoord" type="text" onChange={this.onInputChange} placeholder="lat" value={this.state.projectLatCoord}/>
               <input id="projectLngCoord" type="text" onChange={this.onInputChange} placeholder="lng" value={this.state.projectLngCoord}/>
             </div>
             <div id="projectFormSubmit" onClick={this.submitForm}>submit!</div>
           </div>
           <textarea id="projectDesc" onChange={this.onInputChange} placeholder="description" value={this.state.projectDesc}></textarea>
        </form>
      </div>
    )
  }
})

module.exports = ProjectForm;
