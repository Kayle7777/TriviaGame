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
    this.answers = [];
    function doThis() {
      for (var i = 0; i < obj.keys().length; i++) {
        if(!obj.keys()[i] == question) {
          this.answers.push(obj.keys()[i]);
        }
      }
    }
    doThis()
  }
}
