var React = require('react');

var HintView = require('./HintView.jsx');
var TimerView = require('./TimerView.jsx');
var QuestionView = require('./QuestionView.jsx');
var socketInterface = require('../ClientSocketManager.js');

module.exports = React.createClass({
  getInitialState: function() {
    return  {
      question : "Loading!",
      answers : [],
      hint1 : '',
      hint2 : '',
      timeData : {},
      gameStart : null,
      correctIndex: 0,
      id: 0
    }
  },
  componentDidMount : function() {
    socketInterface.addNewDataListener(this.updateData);
  },
  updateData : function(data) {
    this.setState(data);
    this.render();
  },
  render: function() {
    return (
      <div id="AppView">
        <HintView hint={this.state.hint1} />
        <HintView hint={this.state.hint2} />

        <TimerView time={this.state.timeData} gameStart={this.state.gameStart} scores={this.state.scoreData} />

        <QuestionView question={this.state.question} 
                      answers={this.state.answers}
                      correctIndex={this.state.correctIndex}
                      id={this.state.id} />

      </div>
    )
  }
});