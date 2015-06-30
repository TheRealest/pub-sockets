var React = require('react');

var socketInterface = require('../ClientSocketManager.js');

module.exports = React.createClass({
  render: function() {

    //displays all this.props.lobbies as lobbyEntryViews,
      //then a button "Make new lobby"
    var that = this;
    return (
      <div id="LobbyView">
        <div>Your name: {this.props.username}</div>
        {this.props.lobbies.map(function(item){
          return (
            <LobbyEntryView lobby={item} />
          )
        })}
        <button className={"LobbyEntryView"} onClick={this.makeNewGameLobby}>
          Make new lobby
        </button>
      </div>
    )
  },
  makeNewGameLobby: function() {
    socketInterface.newGameLobby();
  },
});



var LobbyEntryView = React.createClass({
  getInitialState: function() {
    return {
      clickHandlersCanRun: false,
      parsedNames: ""
    }
  },
  componentDidMount: function(){
    this.setState({clickHandlersCanRun:true});
  },
  // TODO parse names with commas
  // parseNames: function(){
  //   var parsedNames = "";
  //   for(var i = 0; i < nextProps.lobby.users.length; i++){
  //     parsedNames+= nextProps.lobby.users[i];
  //     if(i !== nextProps.lobby.users.length-1){
  //       parsedNames+= ", ";
  //     } 
  //   }
  //   this.setState({
  //     parsedNames: parsedNames
  //   });
  // },
  render: function() {
    return (
      <div>
        <button className={'LobbyEntryView'} onClick={this.clickHandler}>
          <div>Lobby: {this.props.lobby.gameId}</div>
          <div>Users in this lobby: {this.props.lobby.users}</div>
        </button>
      </div>
    )
  },

  clickHandler: function() {
    if(!this.state.clickHandlersCanRun) return;
    socketInterface.joinGameLobby(this.props.lobby);
  }
});
