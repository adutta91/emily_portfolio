var React = require('react');

var ProjectList = require('./projectList');

var GlobeStore = require('../../stores/globeStore');
var GlobeUtil = require('../../utils/globeUtil');

var ProjectStore = require('../../stores/projectStore');
var ProjectUtil = require('../../utils/projectUtil');

var Globe = React.createClass({

  getInitialState: function() {
    return ({
      markers: ProjectStore.projects(),
      globe: GlobeStore.globe()
    });
  },

  componentDidMount: function() {
    this.globeListener = GlobeStore.addListener(this.updateGlobes);
    this.projectListener = ProjectStore.addListener(this.updateProjects);
    initializeGlobe();
    ProjectUtil.fetchProjects();
  },

  componentWillUnmount: function() {
    this.projectListener.remove();
    this.globeListener.remove();
  },

  updateProjects: function() {
    this.setState({ markers: ProjectStore.projects() });
  },

  updateGlobes: function() {
    this.setState({ globe: GlobeStore.globe() });
  },

  render: function() {
    addMarkers(this.state.globe, this.state.markers);
    return (
      <div id="globeWrapper" className="flex column center">
        <div id="globe_div"></div>
        <ProjectList />
      </div>
    )
  }
});

var initializeGlobe = function() {
  var globe = new WE.map('globe_div', {tilting: false, zoom: 2.5, position: [34.44805, -119.242889]});
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(globe);
  animate(globe);
  GlobeUtil.setGlobe(globe);
};

var animate = function(globe) {
  var before = null;
  requestAnimationFrame(function animate(now) {
    var gs = GlobeStore;
    if (gs.animation()) {
      var c = globe.getPosition();
      var elapsed = before ? now - before : 0;
      before = now;
      globe.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      requestAnimationFrame(animate);
    }
  });
};

var addMarkers = function(globe, projects) {
  if (projects.length > 0 && globe.c) {
    projects.forEach(function(project, idx) {
      var marker = WE.marker(
        [project.lat, project.lng],
        "http://res.cloudinary.com/dzyfczxnr/image/upload/c_scale,w_28/v1472684320/portfolio/map-marker-icon.png", 28, 28
      ).addTo(globe);
      marker.element.addEventListener("click", function() { ProjectUtil.setProject(globe, project) });
    });
  }
};

module.exports = Globe;
