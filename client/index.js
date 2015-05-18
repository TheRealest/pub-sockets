var React = require('react');
var $ = require('jquery');

var Components = require('./components');

React.render(
  <Components.HelloWorld date={new Date()} />, 
  document.getElementById('main')
);