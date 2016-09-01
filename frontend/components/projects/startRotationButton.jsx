var React = require('react');
var GlobeUtil = require('../../utils/globeUtil');

var StartRotationButton = React.createClass({
  click: function() {
    GlobeUtil.startAnimation();
  },

  render: function() {
    return (
      <div id="rotationButton" onClick={this.click}>
        spin!
      </div>
    )
  }
});

module.exports = StartRotationButton;
