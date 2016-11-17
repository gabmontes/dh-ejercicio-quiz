var state = {
  questions: [
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
  ],
  current: 0,
  score: 0
}

function processAnswer(correct) {
  if (correct) {
    state.score += 1
  }
  state.current += 1
  render()
}

function render() {
  notReactDOM.render(
    () => quiz(state),
    document.getElementById('root')
  )
}

$(render)
