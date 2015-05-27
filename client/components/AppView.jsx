var React = require('react');

var HintView = require('./HintView.jsx');
var TimerView = require('./TimerView.jsx');
var QuestionView = require('./QuestionView.jsx');
var socketInterface = require('../ClientSocketManager.js');

module.exports = React.createClass({
  getInitialState: function() {
    //testing
      
      return {
        question : "When was the war of 1812?",
        answers : ['1968', '1492', '1999', '1812'],
        hints : ['Not in this century', 'Not an odd number'],
        timeData : {
          yourTimeLeft : 127,
          enemyTimeLeft : 132,
          yourScore : 10,
          enemyScore : 10
        },
        correctIndex: 3,
        id: 0
      };

    // return  {
    //   question : "Loading!",
    //   answers : [],
    //   hints : [],
    //   timeData : {},
    //   correctIndex: 0,
    //   id: 0
    // }
  },
  componentDidMount : function() {
    socketInterface.addNewDataListener(this.updateData.bind(this));
  },
  updateData : function(data) {
    this.setState(data);
    this.render();
  },
  render: function() {
    return (
      <div>
        
        <HintView hint={this.state.hints[0]} />
        <HintView hint={this.state.hints[1]} />

        <TimerView time={this.state.timeData} />

        <QuestionView question={this.state.question} 
                      answers={this.state.answers}
                      correctIndex={this.state.correctIndex}
                      id={this.state.id} />

      </div>
    )
  }
});