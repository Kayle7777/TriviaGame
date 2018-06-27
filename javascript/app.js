// TODO: Create an object that uses a constructor to make itself using a randomly chosen index from array of objects

questionObjects = [
  {question: "Question1", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3"},
  {question: "Question2", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3"},
  {question: "Question3", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3"},
  {question: "Question4", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3"},
  {question: "Question5", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3"},
  {question: "Question6", answer1: "Answer1", answer2: "Answer2", answer3: "Answer3"}
];

class Question {
  constructor(obj = questionObjects[Math.floor(Math.random() * questionObjects.length)]) {
    this.question = obj.question;
    this.answers = [obj.answer1, obj.answer2, obj.answer3]
  }
}

function initializeGame() {
  let questionDiv = document.getElementById("question");
  let answerDiv = document.getElementById("answerChoices");
  // questionDiv.innerHTML = "";
  // answerDiv.innerHTML = "";
  QuestionObject = new Question;
  questionDiv.innerHTML = QuestionObject.question;
  answerDiv.innerHTML = "<ul><p>" + QuestionObject.answers[0] + "</p><p>" + QuestionObject.answers[1] + "</p><p>" + QuestionObject.answers[2] + "</p></ul>"

}

initializeGame()
