var React = require('react');

var LinkedInLink = require('../contact/linkedInLink');
var EmailLink = require('../contact/emailLink');

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
      <div id="contactDisplay" className="flex center hidden">
        <LinkedInLink />
        <EmailLink />
      </div>
    )
  }
});

module.exports = Contact;
