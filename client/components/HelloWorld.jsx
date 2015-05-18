var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <p> 
        Hello guys
        It is {this.props.date.toTimeString()}
      </p>
    )
  }
});