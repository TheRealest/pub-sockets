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
