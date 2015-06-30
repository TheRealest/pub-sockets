var React = require('react');

module.exports = React.createClass({
  render: function() {
    //shows all the users in the lobby
    //game start button
    //back button
    return (
      <div>
        <div>Your name: {this.props.username}</div>
        <div id={"LobbyView"}>
          {this.returnUsersIfTheyExist()}
        </div>
        <button id={"StartGameButton"} onClick={this.startGame}>
          Start game!
        </button><br />
        <button id={"RemoveLobbyButton"}>
          Remove this lobby (not working yet)
        </button><br />
        <button id={"BackButton"} onClick={this.props.displayLobbyList}>
          Back
        </button>
      </div>
    )
  },
  returnUsersIfTheyExist: function() {
    console.log('here are the existing users:');
    if(!this.props || !this.props.lobby) {
      console.log('wasnt there');
      return (<div></div>)
    } else {
      console.log(this.props.lobby.users);
      return(this.props.lobby.users.map(function(user, index){
          return(<div>Player {index+1}: {user}</div>)
      }))
    }
  },
  startGame: function() {
    //no arguments: the server knows which game you're in already
    require('../ClientSocketManager.js').startGame();
  }
});
