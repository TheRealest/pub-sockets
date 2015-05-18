var React = require('react');

console.log('FUCKCKKCK');
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