var React = require('react');
var AnswerEntryView = require('./AnswerEntryView.jsx')

module.exports = React.createClass({
  render: function() {
    var createAnswerEntry = function(entry, index) {
      return (<AnswerEntryView answer={entry} index={index} />);
    }
    return (
      <ul>
        {this.props.answers.map(createAnswerEntry)}
      </ul>
    )
  }
});