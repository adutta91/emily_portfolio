var React = require('react');
var GlobeUtil = require('../../utils/globeUtil');
var GlobeStore = require('../../stores/globeStore');

var StartRotationButton = React.createClass({

  getInitialState: function() {
    return ({
      on: GlobeStore.animation()
    })
  },

  click: function() {
    GlobeUtil.toggleAnimation();
  },

  componentDidMount: function() {
    this.globeListener = GlobeStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.globeListener.remove();
  },

  update: function() {
    this.setState({ on: GlobeStore.animation() });
  },

  getClassName: function() {
    if (this.state.on) {
      return "on"
    } else {
      return ""
    }
  },

  render: function() {
    return (
      <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1472760666/portfolio/globe.png"
           id="rotationButton"
           className={this.getClassName()}
           onClick={this.click}/>
    )
  }
});

module.exports = StartRotationButton;
