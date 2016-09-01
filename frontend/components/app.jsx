var React = require('react');

var Header = require('./header/header');
var SubHeader = require('./header/subHeader');
var AboutMe = require('./tabs/aboutMe');
var Projects = require('./tabs/projects');

var Display = require('./display');

var App = React.createClass({

  render: function() {
    return (
      <div id="app" className="">
        <Header />
        <AboutMe />
        <Projects />
      </div>
    )
  }
});

module.exports = App;
