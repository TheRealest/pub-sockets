### Ideas

- extremely short hints (1-2 words), for UI and to encourage people to shout
- questions have to be really hard with no hints and really easy with all the hints
- you have hints for your two immediate neigbors
- bottom half of screen is question and ABCD, tap to select
- you're trying to get as many answers right as you can in the time

### MVP

- Client
  - Views
    - AppView
      - HintView (x2)
      - TimerView
      - QuestionView
        - AnswerView
          -AnswerEntryView (x4)
  - Controllers
    - LobbyController
    - QuizController
  - Models
    - QuizModel
  - Sockets
    - ClientSocketManager
- Server
  - DatabaseManager (MongoDB)
    - Questions
      - Hints
      - Answers
  - ServerSocketManager (SocketIO)
  - Static File Server (Express)
  - Router (Express)

### Extra features

- Super questions
  -Implementations:
    -Every once in a while, a question will give 5 extra seconds
    -If you answer a question correctly in the first 5 seconds, you get an extra 3 seconds
      -If you answer it wrong you lose more, or something

browserify -t reactify client/app.js -o public/scripts/app.js --debug