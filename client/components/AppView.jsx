var React = require('react');

var HintView = require('./HintView.jsx');
var TimerView = require('./TimerView.jsx');
var QuestionView = require('./QuestionView.jsx');
var AnswerView = require('./AnswerView.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        
        <HintView hint={this.props.data.hints[0]} />
        <HintView hint={this.props.data.hints[1]} />

        <TimerView time={this.props.data.timeData} />

        <QuestionView question={this.props.data.question} />

        <AnswerView answers={this.props.data.answers} />

      </div>
    )
  }
});
