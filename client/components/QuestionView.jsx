var React = require('react');
var AnswerEntryView = require('./AnswerEntryView.jsx');

module.exports = React.createClass({

  answerRerender: function(answeredCorrect) {
    //'this' is bound to QuestionView
    (answeredCorrect) ? this.render("right") : this.render('wrong');
  },
  render: function(renderType) {

    //TODO: show the correct answer after you answer
    if(renderType === "wrong" ) {
      return (
      
        <div class="wrong">
          <b>WRONG</b>
        </div>
      
      )
    } else if(renderType === "right") {
      return (

        <div class="right">
          <b>RIGHT</b>
        </div>
      
      )
    } else {
      var correctIndex = this.props.correctIndex;
      var answerRerender = this.answerRerender;
      var id = this.props.id;
      return (
        <div>
          <p>
            {this.props.question}
          </p>
          <ul>
            {this.props.answers.map(function(entry, index) {
              return (<AnswerEntryView answer={entry} 
                       index={index} 
                       correct={index===correctIndex}
                       answerHandler={answerRerender.bind(this)}
                       questionId={id}  /> 
              )}    //http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
            )}
          </ul>
        </div>
      
      )
    }
  }
});