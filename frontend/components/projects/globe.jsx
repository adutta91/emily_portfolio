var React = require('react');

var ProjectUtil = require('../../utils/projectUtil');
var ProjectStore = require('../../stores/projectStore');

var Globe = React.createClass({

  getInitialState: function() {
    return ({
      markers: ProjectStore.projects(),
      globe: {},
      mounted: false
    });
  },

  componentDidMount: function() {
    this.state.mounted = true;
    this.state.globe = initializeGlobe();
    this.projectListener = ProjectStore.addListener(this.update);
    ProjectUtil.fetchProjects();
  },

  componentWillUnmount: function() {
    this.state.mounted = false;
    this.projectListener.remove();
  },

  update: function() {
    if (this.state.mounted) {
      this.setState({ markers: ProjectStore.projects() });
    }
  },

  render: function() {
    addMarkers(this.state.globe, this.state.markers);
    return (
      <div id="globe_div"></div>
    )
  }
});

var initializeGlobe = function() {
  var globe = new WE.map('globe_div', {tilting: false, zoom: 2.0, position: [34.44805, -119.242889]});
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(globe);
  // animate(globe);
  return globe;
};

var animate = function(globe) {
  var before = null;
  requestAnimationFrame(function animate(now) {
      var c = globe.getPosition();
      var elapsed = before? now - before: 0;
      before = now;
      globe.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      requestAnimationFrame(animate);
  });
};

var addMarkers = function(globe, projects) {
  if (projects.length > 0 && globe.c) {
    projects.forEach(function(project, idx) {
      var marker = WE.marker([project.lat, project.lng]).addTo(globe);
      marker.element.addEventListener("click", function() { markerClicked(globe, project) });
    });
  }
};

var markerClicked = function(globe, project) {
  globe.setView([project.lat, project.lng], 3.0);
  ProjectUtil.setProject(project);
};

module.exports = Globe;
