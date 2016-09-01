var React = require('react');

var Header = require('./header/header');
var SubHeader = require('./header/subHeader');
var AboutMe = require('./tabs/aboutMe');
var Projects = require('./tabs/projects');
var Contact = require ('./tabs/contact');

var Display = require('./display');

var App = React.createClass({

  componentDidMount: function() {
    $(document).scrollTop(0);
  },

  render: function() {
    return (
      <div id="app" className="">
        <Header />
        <div id="aboutMeSeparator" className="separator" />
        <AboutMe />
        <div id="projectsSeparator" className="separator" />
        <Projects />
        <div id="contactSeparator" className="separator" />
        <Contact />
      </div>
    )
  }
});

module.exports = App;
