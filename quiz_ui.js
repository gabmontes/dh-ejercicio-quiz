function renderOption(quiz, text, i) {
  var optionsElement = document.getElementById('options')

  var pElement = document.createElement('p')
  pElement.innerText = text

  var buttonElement = document.createElement('button')
  buttonElement.innerText = 'Select Answer'
  buttonElement.className = 'btn--default'
  buttonElement.addEventListener('click', function () {
    quiz.processAnswer(i)
    render(quiz)
  })

  optionsElement.appendChild(pElement)
  optionsElement.appendChild(buttonElement)
}

function render(quiz) {
  if (quiz.hasMoreQuestion()) {
    var q = quiz.getCurrentQuestion()

    var questionElement = document.getElementById('question')
    questionElement.innerText = q.getText()

    document.getElementById('options').innerHTML = ""
    quiz.getQuestionOptions().forEach(function (text, i) {
      renderOption(quiz, text, i)
    })

    var progressElement = document.getElementById('progress')
    progressElement.innerText = 'Question '
    + (quiz.getCurrentIndex() + 1)
    + ' of '
    + (quiz.getTotalQuestions())
  } else {
    document.getElementById('quiz').classList.toggle('hidden')
    document.getElementById('over').classList.toggle('hidden')

    var score = document.getElementById('final-score')
    score.innerHTML = quiz.getScore()
  }
}
