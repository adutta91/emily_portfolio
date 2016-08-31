var React = require('react');

var Contact = React.createClass({
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
      <div className="displayTab">
        <h1> ~ Contact display in progress ~ </h1>
      </div>
    )
  }
});

module.exports = Contact;
