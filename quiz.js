function Quiz(questions) {
  this.questions = questions
  this.score = 0
  this.current = 0
}
Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.current]
};
Quiz.prototype.getCurrentIndex = function () {
  return this.current
}
Quiz.prototype.getTotalQuestions = function () {
  return this.questions.length
}
Quiz.prototype.processAnswer = function (i) {
  var q = this.getCurrentQuestion()
  this.score += q.getScoreForOption(i)
  this.current += 1
}
Quiz.prototype.hasMoreQuestion = function () {
  return this.current !== this.questions.length
}
Quiz.prototype.getScore = function () {
  return this.score
}
Quiz.prototype.getQuestionOptions = function () {
  var q = this.getCurrentQuestion()
  return q.getOptions()
}
