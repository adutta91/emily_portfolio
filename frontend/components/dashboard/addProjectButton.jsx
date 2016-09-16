var React = require('react');

var DashboardUtil = require('../../utils/dashboardUtil');

module.exports = React.createClass({

  click: function(event) {
    DashboardUtil.resetDisplay("newForm");
  },

  render: function() {
    return (
      <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1456979318/add.png"
           className="icon"
           onClick={this.click} />
    )
  }
})
