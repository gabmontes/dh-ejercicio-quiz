var quizUI = {
  renderOption: function (text, i) {
    var self = this
    var quiz = this.quiz

    var $pElement = $(`<p>${text}</p>`)

    var $buttonElement = $(`<button class="btn--default">Select Answer</button>`)
    $buttonElement.click(function () {
      quiz.processAnswer(i)
      self.render(quiz)
    })

    var $optionsElement = $('#options')
    $optionsElement.append($pElement)
    $optionsElement.append($buttonElement)
  },

  render: function (quiz) {
    this.quiz = quiz

    if (quiz.hasMoreQuestion()) {
      var q = quiz.getCurrentQuestion()

      $('#question').text(q.getText())

      $('#options').html("")
      quiz.getQuestionOptions().forEach(this.renderOption.bind(this))

      $('#progress').text(`Question ${quiz.getCurrentIndex() + 1} of ${quiz.getTotalQuestions()}`)
    } else {
      $('#quiz').toggleClass('hidden')
      $('#over').toggleClass('hidden')
      $('#final-score').text(quiz.getScore())
    }
  }
}
