var React = require('react');

var TABS = require('../../assets/tabs');
var TABNAMES = require('../../assets/tabNames');

var TabUtil = require('../../utils/tabUtil');
var TabStore = require('../../stores/tabStore');

var SubHeader = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "aboutMe"
    }
  },

  componentDidMount: function() {
    this.tabListener = TabStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.tabListener.remove();
  },

  update: function() {
    this.setState( {selectedTab: TabStore.selectedTab()} );
  },

  selectTab: function(event) {
    var tab = event.currentTarget.id;
    TabUtil.selectTab(tab);
  },

  getTabs: function() {
    var currentTab = this.state.selectedTab;
    var that = this;
    return TABS.tabs.map(function(tab) {
      var className = tab === currentTab ? "tab selected" : "tab";
      return (
        <h3 key={tab}
            id={tab}
            className={className}
            onClick={that.selectTab}>
          {TABNAMES[tab]}
        </h3>
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
