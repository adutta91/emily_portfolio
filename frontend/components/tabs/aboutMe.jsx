var React = require('react');

var Description = require('./description');

var AboutMe = React.createClass({
  render: function() {
    return (
      <div id="aboutMe" className="flex center">
        <div className="crop">
         </div>
        <Description />
      </div>
    )
  }
});

module.exports = AboutMe;
