var React = require('react');

var Header = require('./header/header')

var Greeting = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
      </div>
    )
  }
});

module.exports = Greeting;
