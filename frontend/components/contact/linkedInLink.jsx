var React = require('react');

module.exports = React.createClass({

  clicked: function(event) {
    window.open(
      'https://www.linkedin.com/in/emily-combs-29417199',
      '_blank'
    );
  },

  render: function() {
    return (
      <img className="icon"
           src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466453609/portfolio/linkedin.png"
           onClick={this.clicked}/>
    )
  }
});
