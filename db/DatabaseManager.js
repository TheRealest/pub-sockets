var mongo = require('mongodb');
var monk = require('monk');
var dbConfig = require('./mongolab.config'); 
var db = monk(dbConfig);

var questionList = db.get('TestQuestions');

var questions = [
  {
    question : "The Battle of Hastings was between the Normans and the _____.",
    answers : ["English", "Iriquois", "Romans", "French"],
    hint1 : "Western European", 
    hint2 : "Starts with a vowel",
    correctIndex: 1,
    id: 1
  },{
    question : "Graz, formermly known as Gratz, is the second largest city in what country?",
    answers : ['Czech Republic', 'Austria', 'Ukraine', 'Italy'],
    hint1 : 'Wasn\'t ever in the Soviet Bloc', 
    hint2 : 'The First is Vienna',
    correctIndex: 2,
    id: 2
  },{
    question : "Which of these countries has the highest GDP per capita?",
    answers : ['Spain', 'Lithuania', 'Oman', 'Argentina'],
    hint1 : 'Probably not what you\'re thinking', 
    hint2 : 'One of the shorter answers',
    correctIndex: 3,
    id: 3
  },{
    question : "The International Day of Nonviolence is celebrated on the birthday of",
    answers : ['Martin Luther King, Jr.', 'Gautama Buddha', 'César Chávez', 'Mahatma Gandhi'],
    hint1 : 'Born in Asia', 
    hint2 : 'Died in 1948',
    correctIndex: 4,
    id: 4
  },{
    question : "The most decorated WWE champion is",
    answers : ['Raven', 'Ric Flair', 'The Rock', 'Chris Jericho'],
    hint1 : 'Starts with an R', 
    hint2 : 'Active in the 90\'s',
    correctIndex: 1,
    id: 5
  },{
    question : "The Japanese ship named Yamato was used in _____.",
    answers : ['The Genkō War', 'World War 2', 'The Sino-Japanese War', 'The Taisho Period'],
    hint1 : 'A modern war', 
    hint2 : 'It was a battleship',
    correctIndex: 2,
    id: 6
  },{
    question : "What is the currency in Thailand?",
    answers : ['Thailand Dollar', 'Yuan', 'Bhat', 'Fuang'],
    hint1 : 'Four letters long', 
    hint2 : 'Not Yuan',
    correctIndex: 3,
    id: 7 
  },{
    question : "The Luger was used by Germans in",
    answers : ['World War 1', 'World War 2', 'Neither World War', 'Both World Wars'],
    hint1 : 'Used in World War 1', 
    hint2 : 'Used in World War 2',
    correctIndex: 4,
    id: 8
  },{
    question : "The Ottoman Empire officially ended in",
    answers : ['1923', '1299', '1878', '1938'],
    hint1 : 'During the 1900\'s', 
    hint2 : 'After World War 1',
    correctIndex: 1,
    id: 9
  },{
    question : "Where was the crepe invented?",
    answers : ['Morocco', 'France', 'Italy', 'U.S.A.'],
    hint1 : 'In Europe', 
    hint2 : 'French speaking country',
    correctIndex: 2,
    id: 10
  },{
    question : "Define 'dither.'",
    answers : ['To walk', 'To psychoanalyze', 'To act doubtfully', 'To poeticize a serious matter'],
    hint1 : 'More than two words', 
    hint2 : 'Less than five words',
    correctIndex: 3,
    id: 11
  },{
    question : "XXXXXXXXXXXXXX",
    answers : ['11111', '222222', '333333', '444444'],
    hint1 : 'AAAAAAAAAA', 
    hint2 : 'BBBBBBBBBB',
    correctIndex: 4,
    id: 12
  }
]

var counter = 0;

module.exports = {
  fetchNewQuestion : function() {
    return questions[counter];
  },
  
  //TODO 
  //fetch functions, insert functions

  //markQuestionAsDone?
  //markQuestionAsDoneByUser?

  //track game state on database?(no -- at least, not yet)
}
