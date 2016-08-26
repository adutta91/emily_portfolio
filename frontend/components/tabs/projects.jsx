var React = require('react');

var ProjectInfo = require('../projects/projectInfo');

var ProjectUtil = require('../../utils/projectUtil');
var ProjectStore = require('../../stores/projectStore');

var Projects = React.createClass({

  getInitialState: function() {
    return ({
      projects: ProjectStore.projects()
    })
  },

  componentDidMount: function() {
    this.globe = initializeGlobe();
    this.projectListener = ProjectStore.addListener(this.update);
    ProjectUtil.fetchProjects();
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
  },

  update: function() {
    this.setState({ projects: ProjectStore.projects() });
    addMarkers(this.globe);
  },

  render: function() {
    return (
      <div id="projectsTab" className="flex">
        <div id="earth_div"></div>
        <ProjectInfo />
      </div>
    )
  }
});

var initializeGlobe = function() {
  var globe = new WE.map('earth_div');
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(globe);

  return globe;
}

var addMarkers = function(globe) {
  var json = {"profile": "mercator", "name": "Grand Canyon USGS", "format": "png", "bounds": [-112.26379395, 35.98245136, -112.10998535, 36.13343831], "minzoom": 10, "version": "1.0.0", "maxzoom": 16, "center": [-112.18688965, 36.057944835, 13], "type": "overlay", "description": "", "basename": "grandcanyon", "tilejson": "2.0.0", "sheme": "xyz", "tiles": ["http://tileserver.maptiler.com/grandcanyon/{z}/{x}/{y}.png"]};
  var marker = WE.marker([json.center[1], json.center[0]]).addTo(globe);
  marker.element.addEventListener("click", function() {
    alert('hey!!!')
  });
}

module.exports = Projects;
