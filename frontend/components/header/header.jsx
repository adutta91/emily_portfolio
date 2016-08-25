var React = require('react');

var SubHeader = require('./subHeader');

var Header = React.createClass({
  render: function() {
    return (
      <div id="header" className="flex column center">
        <h1>Emily Combs</h1>
      </div>
    )
  }
});

module.exports = Header;
