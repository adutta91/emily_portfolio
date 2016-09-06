// VESTIGIAL - used for other format

var React = require('react');

var TabStore = require('../stores/tabStore');

var TABCOMPONENTS = require('../assets/tabComponents');

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

  getTab: function() {
    return TABCOMPONENTS[this.state.tab]
  },

  render: function() {
    return (
      <div id="display" className="flex center">
        { this.getTab() }
      </div>
    )
  }
});

module.exports = Display;
