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
    // addScrollListener();
  },

  componentWillUnmount: function() {
    this.tabListener.remove();
  },

  update: function() {
    this.setState( {selectedTab: TabStore.selectedTab()} );
  },

  selectTab: function(event) {
    var tab = event.currentTarget.id;
    var id = "#" + tab;
    var display = id + "Display"
    $(id).click(function() {
      $('html, body').animate({
          scrollTop: $(display).offset().top - 50
      }, 750);
    });
    TabUtil.selectTab(tab);
  },

  getTabs: function() {
    var currentTab = this.state.selectedTab;
    var that = this;
    return TABS.tabs.map(function(tab) {
      return (
        <h3 key={tab}
            id={tab}
            className="tab"
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

var addScrollListener = function() {
  window.addEventListener('scroll', function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos < $("projects").scrollTop()) {

    } else if (scrollPos < $("contact").scrollTop()) {

    } else {

    }
  });
};



module.exports = SubHeader;
