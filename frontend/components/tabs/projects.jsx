var React = require('react');

var ProjectInfo = require('../projects/projectInfo');

var Projects = React.createClass({

  componentDidMount: function() {
    var globe = initializeGlobe();
    addMarkers(globe);
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
