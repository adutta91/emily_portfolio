var React = require('react');

var Description = require('./description');

var AboutMe = React.createClass({
  componentDidMount: function() {
    var tab = document.getElementsByClassName('displayTab')[0];
    tab.classList.add("loaded");
  },

  componentWillUnmount: function() {
    var tab = document.getElementsByClassName('loaded')[0];
    tab.classList.remove("loaded");
  },

  render: function() {
    return (
      <div id="aboutMe" className="flex center displayTab">
        <div className="crop">
         </div>
        <Description />
      </div>
    )
  }
});

module.exports = AboutMe;
