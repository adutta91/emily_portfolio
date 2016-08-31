var React = require('react');

var Contact = React.createClass({
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
      <div className="hidden">
        <h1> ~ Contact display in progress ~ </h1>
      </div>
    )
  }
});

module.exports = Contact;
