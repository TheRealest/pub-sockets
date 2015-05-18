var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <p>
        Your hint is: {this.props.hint}
      </p>
    )
  }
});