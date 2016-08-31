var React = require('react');

var Description = require('./description');

var AboutMe = React.createClass({
  componentDidMount: function() {
    this.enterTimer = window.setTimeout(this.changeClass, 250);
  },

  componentWillUnmount: function() {
    window.clearTimeout(this.enterTimer)
  },

  changeClass: function() {
    var tab = document.getElementsByClassName('hidden')[0];
    tab.classList.remove("hidden");
    tab.classList.add("loaded");
  },

  render: function() {
    return (
      <div id="aboutMe" className="flex center hidden">
        <div className="crop">
         </div>
        <Description />
      </div>
    )
  }
});

module.exports = AboutMe;
