var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    setInterval(this.refreshTime, 250);
    return {
      yourTimeLeft : 0,
      yourScore : 0,
      enemyTimeLeft : 0,
      enemyScore : 0,
      time: {
        yourExtraTime: 30,
        enemyExtraTime: 30
      }
    };
  },
  refreshTime: function() {
    if(!this.props.gameStart) return;
    var now = new Date();
    this.setState({
      yourSecondsLeft : Math.floor(((this.props.gameStart - now.getTime())/1000) + this.props.time.yourExtraTime),
      enemySecondsLeft : Math.floor(((this.props.gameStart - now.getTime())/1000) + this.props.time.enemyExtraTime)
    })
  },
  render: function() {
    return (
      <div className="timerView">
        <div className="timerViewQuarter">
          Your time: {this.state.yourSecondsLeft}
        </div> 
        <div className="timerViewQuarter">
          Your team score: {this.state.yourScore}   
        </div> 
        <div className="timerViewQuarter">
          Their time: {this.state.enemySecondsLeft}  
        </div> 
        <div className="timerViewQuarter">
          Their team score: {this.state.enemyScore}
        </div>
      </div>
    )
  }
});
