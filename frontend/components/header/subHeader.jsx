var React = require('react');

var TABS = require('../../assets/tabs');
var TABNAMES = require('../../assets/tabNames');

var SubHeader = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "aboutMe"
    }
  },

  getTabs: function() {
    var currentTab = this.state.selectedTab;
    return TABS.tabs.map(function(tab) {
      var className = tab === currentTab ? "tab selected" : "tab";
      return (
        <div key={tab} id={tab} className={className}>{TABNAMES[tab]}</div>
      )
    });
  },

  render: function() {
    return (
      <div id="subHeader" className="flex center">
        { this.getTabs() }
      </div>
    )
  }
});



module.exports = SubHeader;
