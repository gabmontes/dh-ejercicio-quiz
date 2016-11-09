function Question(text, options, correct) {
  this.text = text
  this.options = options
  this.correct = correct
}
Question.prototype.getText = function () {
  return this.text
}
Question.prototype.getOptionText = function (i) {
  return this.options[i]
}
Question.prototype.getScoreForOption = function (i) {
  return i === this.correct ? 1 : 0
}
Question.prototype.getOptions = function () {
  return this.options
}
