function quizOption({ option, correct }) {
  return `
    <p>${option}</p>
    <button class="btn--default" onclick="processAnswer(${correct})">Select Answer</button>
  `
}

function quizQuestion({ question }) {
  return `
    <div>
      <h1>Awesome Quiz</h1>
      <h2class="headline-secondary--grouped">${question.text}</h2>
      <div>
        ${question.options.map((option, i) => quizOption({ option, correct: question.correct === i })).join('')}
      </div>
    </div>
  `
}

function quizFooter({ current, questions }) {
  return `
    <footer>
      <p>Question ${current + 1} of ${questions.length}</p>
    </footer>
  `
}

function quizOver({ score }) {
  return `
    <div class="centered grid__col--8">
      <h1>Game Over</h1>
      <h2>Your score is: <span>${score}</span></h2>
    </div>
  `
}

function quiz({ questions, current, score }) {
  if (current < questions.length) {
    var question = questions[current]
    return `
      <div class="centered grid__col--8">
        ${
          quizQuestion({ question }) +
          quizFooter({ current, questions })
        }
      </div>
    `
  } else {
    return quizOver({ score })
  }
}
