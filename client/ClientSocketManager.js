var socketServer = io.connect();

module.exports = {

  //Event listeners

  //On event: 'new data'
  addNewDataListener: function(listeningFunc) {
    //listeningFunc is (essentially) just this.setState(data)
    socketServer.on('newData', listeningFunc);
  },


  //Event emitters

  //Emit event: 'newGameLobby'
  newGameLobby: function() {
    socketServer.emit('newGameLobby');
  },
  //Emit event: 'joinGameLobby'
  joinGameLobby: function(lobby) {
    socketServer.emit('joinGameLobby', lobby);
  },
  //Emit event: 'startGame'
  startGame: function() {
    socketServer.emit('startGame');
  },
  //Emit event: 'answer'
  answer: function(emittingAnswer, correct, questionId) {
    console.log('answer was emitted: ' + emittingAnswer);
    socketServer.emit('answer', { answer : emittingAnswer, 
                                  correct: correct,
                                  questionId: questionId });
  },
  //Emit event: 'gameEnd'
  gameEnd: function() {
    socketServer.emit('gameEnd');
  },
}
