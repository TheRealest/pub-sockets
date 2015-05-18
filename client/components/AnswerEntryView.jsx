var React = require('react');

module.exports = React.createClass({
  render: function() {
    var numToLetter = {0:'A',1:'B',2:'C',3:'D'};
    return (
      <li>
        {numToLetter[this.props.index]} : {this.props.answer}
      </li>
    )
  }
});