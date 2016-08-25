var React = require('react');
var ReactDOM = require('react-dom');

var EmilyPortfolio = React.createClass({
  render: function() {
    return (
      <div>
        Hello, World!
      </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<EmilyPortfolio/>, root);
});
