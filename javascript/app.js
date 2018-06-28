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

let timer = 0;
function startTimer() {
  setInterval(() => {
    timer++;
    document.getElementById("timeRemaining").innerHTML = timeConverter(timer);
  }, 1000)
}

function initializeGame() {
  clearInterval(timer);
  startTimer();
  let questionDiv = document.getElementById("question");
  let answerDiv = document.getElementById("answerChoices");
  // questionDiv.innerHTML = "";
  // answerDiv.innerHTML = "";
  QuestionObject = new Question;
  questionDiv.innerHTML = QuestionObject.question;
  answerDiv.innerHTML = "<ul><p>" + QuestionObject.answers[0] + "</p><p>" + QuestionObject.answers[1] + "</p><p>" + QuestionObject.answers[2] + "</p></ul>"
}

initializeGame();

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
