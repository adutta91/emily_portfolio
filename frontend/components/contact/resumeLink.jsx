var React = require('react');

module.exports = React.createClass({

  clicked: function (event) {
    window.open(
      'app/assets/.pdf',
      '_blank'
    );
  },

  render: function() {
    return (
      <img className="icon"
           src="http://res.cloudinary.com/dzyfczxnr/image/upload/v1466490680/portfolio/resume.png"
           onClick={this.clicked}/>
    )
  }
})
