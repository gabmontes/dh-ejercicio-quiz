var questions = [
  {
    text: '¿Cuál es la dirección de DH?',
    options: ['Monroe 860', 'Libertador 1124'],
    correct: 0
  },
  {
    text: '¿Cuándo trae Brian las pizzas?',
    options: ['mañana', 'pasado', 'nunca'],
    correct: 1
  }
]

var questionObjects = questions.map(function (q) {
  return new Question(q.text, q.options, q.correct)
})
var quiz = new Quiz(questionObjects)

quizUI.render(quiz)
