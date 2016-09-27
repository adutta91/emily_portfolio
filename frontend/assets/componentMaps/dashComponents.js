var React = require('react');

var ProjectForm = require('../../components/dashboard/projectForm');
var DashIntro = require('../../components/dashboard/dashIntro');

module.exports = {
  "newForm": <ProjectForm new={true}/>,
  "editForm": <ProjectForm new={false}/>,
  "intro": <DashIntro />
}
