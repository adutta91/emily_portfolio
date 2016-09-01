var React = require('react');

var Header = require('./header/header');
var SubHeader = require('./header/subHeader');
var Display = require('./display');

var App = React.createClass({

  render: function() {
    return (
      <div id="app" className="flex column center">
        <Header />
      </div>
    )
  }
});

module.exports = App;
