var React = require('react');

var Projects = React.createClass({

  componentDidMount: function() {
    initialize();
  },

  render: function() {
    return (
      <div id="earth_div"></div>
    )
  }
});

module.exports = Projects;
