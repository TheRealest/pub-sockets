var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.time.yourTimeLeft} / {this.props.time.yourScore}   |   
        {this.props.time.enemyTimeLeft} / {this.props.time.enemyScore}
      </p>
    )
  }
});
