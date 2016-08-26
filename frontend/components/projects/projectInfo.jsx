var React = require('react');

var ProjectInfo = React.createClass({
  render: function() {
    return (
      <div id="projectDetail" className="flex column center">
        <div id="projectHeader">
          <h1>Project Title</h1>
          <h3>Project Location</h3>
        </div>
        <p id="projectDescription">
          <h5>Project description:</h5>
          Lots of words Lots of words Lots of words Lots of words Lots of words
          Lots of words Lots of words Lots of words Lots of words Lots of words
          Lots of words Lots of words Lots of words Lots of words Lots of words
          Lots of words Lots of words Lots of words Lots of words Lots of words
          Lots of words Lots of words Lots of words Lots of words Lots of words
          Lots of words Lots of words Lots of words Lots of words Lots of words
          Lots of words Lots of words Lots of words Lots of words Lots of words
        </p>
      </div>
    )
  }
});

module.exports = ProjectInfo;
