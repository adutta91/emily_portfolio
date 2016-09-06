var React = require('react');

var TABS = require('../../assets/tabs');
var TABNAMES = require('../../assets/tabNames');

var TabUtil = require('../../utils/tabUtil');
var TabStore = require('../../stores/tabStore');

var SubHeader = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: TabStore.selectedTab()
    }
  },

  componentDidMount: function() {
    this.tabListener = TabStore.addListener(this.update);
    addScrollListener();
  },

  componentWillUnmount: function() {
    this.tabListener.remove();
  },

  update: function() {
    this.setState( { selectedTab: TabStore.selectedTab() } );
  },

  selectTab: function(event) {
    var tab = event.currentTarget.id;
    var id = "#" + tab;
    var headerBuffer = $(window).height() * .075;
    var separator = id + "Separator"
    $('html, body').animate({
        scrollTop: $(separator).offset().top - headerBuffer
    }, 750);
    TabUtil.selectTab(tab);
  },

  getTabs: function() {
    var currentTab = this.state.selectedTab;
    var that = this;
    return TABS.tabs.map(function(tab) {
      return (
        <h3 key={tab}
            id={tab}
            className={currentTab === tab ? "tab selected" : "tab"}
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
  var headerBuffer = $(window).height() * .25;
  window.addEventListener('scroll', function() {
    var scrollPos = $(window).scrollTop() + headerBuffer;
    if (scrollPos < $("#projectsDisplay").offset().top) {
      selectTab('aboutMe');
    } else if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      selectTab('contact');
    } else if (scrollPos < $("#contactDisplay").offset().top) {
      selectTab('projects');
    }
  });
};

var selectTab = function(id) {
  var target = id;
  $('.tab').each(function(idx, ele) {
    if (ele.id === id) {
      ele.classList.add('selected');
    } else {
      ele.classList.remove('selected');
    }
  });
};



module.exports = SubHeader;
