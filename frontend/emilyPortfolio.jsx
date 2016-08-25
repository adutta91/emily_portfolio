var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = require('./components/greeting');

document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Greeting/>, root);
});
