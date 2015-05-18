### Ideas

- extremely short hints (1-2 words), for UI and to encourage people to shout
- questions have to be really hard with no hints and really easy with all the hints
- you have hints for your two immediate neigbors
- bottom half of screen is question and ABCD, tap to select
- you're trying to get as many answers right as you can in the time

### MVP

- Views
  - AppView
    - HintView
      - LeftHintView
      - RightHintView
    - TimerView
    - QuestionView
      - AnswerView
- Controllers
  - LobbyController
  - QuizController
- Services
  - QuizService

- Server
  - Database (MongoDB)
    - Questions
      - Hints
      - Answers
  - SocketIO
  - Express (static file server)
