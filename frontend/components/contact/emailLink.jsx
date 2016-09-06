var React = require('react');

module.exports = React.createClass({

  clicked: function(event) {
    window.location.href = "mailto:asburycombs#gmail.com";
  },

  render: function() {
    return (
      <img src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466717141/portfolio/atsign.jpg"
           className="icon"
           onClick={this.clicked}/>
    )
  }
});
