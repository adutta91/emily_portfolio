var React = require('react');
var GlobeUtil = require('../../utils/globeUtil');

var StartRotationButton = React.createClass({
  click: function() {
    GlobeUtil.startAnimation();
  },

  render: function() {
    return (
      <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1472751493/portfolio/swirl.jpg"
           id="rotationButton"
           onClick={this.click}/>
    )
  }
});

module.exports = StartRotationButton;
