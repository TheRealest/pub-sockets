var React = require('react');

var HintView = require('./HintView.jsx');
var TimerView = require('./TimerView.jsx');
var QuestionView = require('./QuestionView.jsx');
var LobbyView = require('./LobbyView.jsx');
var LobbyListView = require('./LobbyListView.jsx');

var socketInterface = require('../ClientSocketManager.js');

module.exports = React.createClass({
  getInitialState: function() {
    return  {
      username: "",
      question : "Loading!",
      answers : [],
      hint1 : '',
      hint2 : '',
      timeData : {},
      gameStart : null,
      correctIndex: 0,
      questionId: 0,
      lobbies: ["Loading!"],
      lobbyDisplay: false,
      lobbyListDisplay: true
    }
  },
  componentDidMount : function() {
    socketInterface.addNewDataListener(this.updateData);
  },
  updateData: function(data) {
    this.setState(data);
    // this.render();
  },
  displayLobbyList: function(){
    this.setState({
      lobbyListDisplay: true,
      lobbyDisplay: false
    });
  },
  render: function() {
    console.log('AppView.render()');
    console.log(this.state);
  //rendering
    if (this.state.lobbyListDisplay) {
      //User is in the lobby list view
      return (<LobbyListView lobbies={this.state.lobbies} 
                             currentLobby={this.state.currentLobby}
                             username={this.state.username} />)
  //User is in the lobby view
    } else if (this.state.lobbyDisplay) {
    //User is in the lobby display view
      //iterates through all lobbies (yeah, i know)
      var yourLobby = null;
      console.log('looking for your lobby');
      console.log('your username is ',this.state.username)
      console.log(this.state.lobbies);
      for(var i = 0; i < this.state.lobbies.length; i++) {
        //if your userId is in a lobby, 
        if(!this.state.lobbies[i].userIds) continue;
        if(this.state.lobbies[i].users.indexOf(this.state.username) > -1){
          yourLobby = this.state.lobbies[i];
          break;
        }
      }
      console.log('yourLobby');
      console.log(yourLobby);
      return (<LobbyView lobby={yourLobby} 
                         username={this.state.username}
                         displayLobbyList={this.displayLobbyList} />)
    } else {
  //User is in the game view
      if (this.state.gameHasEnded) {
        return (
          <div>Game is over!!!</div>
        )
      } else {
        return (
          <div id="AppView">
            <HintView hint={this.state.hint1} />
            <HintView hint={this.state.hint2} />
            <TimerView time={this.state.timeData} 
                       gameStart={this.state.gameStart} 
                       scores={this.state.scoreData} />
            <QuestionView question={this.state.question} 
                          answers={this.state.answers}
                          correctIndex={this.state.correctIndex}
                          id={this.state.questionId} />
          </div>
        )
      } 
    }
  }
});
