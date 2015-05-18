var React = require('react');
var $ = require('jquery');

var AppView = require('./components/AppView.jsx');

var testData = {
  question : "When was the war of 1812?",
  answers : ['1968', '1492', '1999', '1812'],
  hints : ['Not in this century', 'Not an odd number'],
  timeData : {
    yourTimeLeft : 127,
    enemyTimeLeft : 132,
    yourScore : 10,
    enemyScore : 10
  }
}

React.render(
  <AppView data={testData} />, 
  document.getElementById('main')
);