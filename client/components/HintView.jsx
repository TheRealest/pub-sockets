var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="hint-view">
        Your hint is: {this.props.hint}
      </div>
    )
  }
});
