var React = require('react');

var SubHeader = require('./subHeader');

var Header = React.createClass({
  render: function() {
    return (
      <div id="header" className="flex center">
        <h1 id="name">Emily Combs</h1>
        <SubHeader />
      </div>
    )  }
});

module.exports = Header;
