var React = require('react');

var TabStore = require('../stores/tabStore');

var Display = React.createClass({

  getInitialState: function() {
    return {
      tab: TabStore.selectedTab()
    }
  },

  componentDidMount: function() {
    this.tabListener = TabStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.tabListener.remove();
  },

  update: function() {
    this.setState({ tab: TabStore.selectedTab() });
  },

  render: function() {
    return (
      <div>

      </div>
    )
  }
});

module.exports = Display;
