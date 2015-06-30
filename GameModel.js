var db = require('./db/DatabaseManager.js');

var PubGameModel = function() {
  this.answeredQuestions = {};
  this.yourExtraTime = 30;
  this.enemyExtraTime = 30;
  this.yourScore = 0;
  this.enemyScore = 0;
  this.gameStarted = false;

  this.userIds = [];
  //in game user info: tracks question id, hint ids
}

PubGameModel.prototype.startGame = function(gameData, callback) {
  this.userIds = gameData.userIds;

  //syntax of gameData:
        //   var newGameLobby = {
        //   users: [allUsers[userId].name],
        //   userIds: [userId],
        //   gameId: Math.floor(Math.random()*10000000000),
        //   gameModel: null
        // }
  this.gameStarted = true;

  //sets number of users and names

  

  //updates newData with a new question and hint for each player
    //make a function that figures out who to send stuff to and
    //returns newData based on that. then use it in registeranswer
    //as well
    //AS WELL

  callback(gameData);
};


PubGameModel.prototype.registerAnswer = function(data, userId, callback) {
  this.answeredQuestions[data.id] = true;

  data.changingUserSocket = userId;

  this.yourExtraTime += 5;

  var newQuestionData = db.fetchNewQuestion();

  newData.timeData = {
    yourExtraTime : this.yourExtraTime,
    enemyExtraTime : this.enemyExtraTime
  };

  newData.scoreData = {
    yourScore : this.yourScore,
    enemyScore : this.enemyScore
  };

  //AS WELL
  callback(newQuestionData);
};

PubGameModel.prototype.endGame = function(callback) {
  var winner = "your team"
  callback(winner+" wins!");
};

module.exports = PubGameModel;
