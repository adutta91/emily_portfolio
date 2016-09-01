var React = require('react');

var ProjectForm = React.createClass({

  getInitialState: function() {
    return ({
      projectTitle: "",
      projectStartDate: "",
      projectEndDate: "",
      projectLocation: "",
      projectLatCoord: "",
      projectLngCoord: "",
      projectDesc: ""
    })
  },

  render: function() {
    return (
      <div id="projectModal">
        <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1472766011/portfolio/close.png"
             id="closeModalButton"
             onClick={this.hideModal}/>
        <form id="projectForm" className="flex">
           <div className="flex column">
             <input type="text" placeholder="title" value={this.state.projectTitle}/>
             <input type="text" placeholder="start date" value={this.state.projectStartDate}/>
             <input type="text" placeholder="end date" value={this.state.projectEndDate}/>
             <input type="text" placeholder="location" value={this.state.projectLocation}/>
             <div className="flex center" id="coordsForm">
               <input type="text" placeholder="lat" value={this.state.projectLatCoord}/>
               <input type="text" placeholder="lng" value={this.state.projectLngCoord}/>
             </div>
             <div id="projectFormSubmit" onClick={this.submitForm}>submit!</div>
           </div>
           <textarea id="projectFormDesc" placeholder="description" value={this.state.projectDesc}></textarea>
        </form>
      </div>
    )
  }
})

module.exports = ProjectForm;
