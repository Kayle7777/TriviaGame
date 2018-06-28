// TODO: Create an object that uses a constructor to make itself using a randomly chosen index from array of objects

questionObjects = [
  {question: "Question1", wrong1: "Answer1", wrong2: "Answer2", wrong3: "Answer3", right: "Answer4"},
  {question: "Question2", wrong1: "Answer1", wrong2: "Answer2", wrong3: "Answer3", right: "Answer4"},
  {question: "Question3", wrong1: "Answer1", wrong2: "Answer2", wrong3: "Answer3", right: "Answer4"},
  {question: "Question4", wrong1: "Answer1", wrong2: "Answer2", wrong3: "Answer3", right: "Answer4"},
  {question: "Question5", wrong1: "Answer1", wrong2: "Answer2", wrong3: "Answer3", right: "Answer4"},
  {question: "Question6", wrong1: "Answer1", wrong2: "Answer2", wrong3: "Answer3", right: "Answer4"}
];

class Question {
  constructor(obj = questionObjects[Math.floor(Math.random() * questionObjects.length)]) {
    this.question = obj.question;
    this.choices = [obj.wrong1, obj.wrong2, obj.wrong3, obj.right]
    this.rightChoice = this.choices[3]
    shuffle(this.choices);
  }
}
let timeInterval;
function startTimer() {
  timeInterval = setInterval(() => {
    timer--;
    document.getElementById("timeRemaining").innerHTML = timeConverter(timer);
    if (timer < 0) {
      document.getElementById("timeRemaining").innerHTML = "<span>00 <strong> Time's up! <strong></span>"
      clearInterval(timeInterval);
      setTimeout(initializeGame, 3000);
    };
  }, 1000)
}

function initializeGame() {
  timer = 3;
  document.getElementById("timeRemaining").innerHTML = timeConverter(timer);
  clearInterval(timeInterval);
  startTimer();
  let questionDiv = document.getElementById("question");
  let answerDiv = document.getElementById("answerChoices");
  // questionDiv.innerHTML = "";
  // answerDiv.innerHTML = "";
  QuestionObject = new Question;
  questionDiv.innerHTML = QuestionObject.question;
  answerDiv.innerHTML = "<ul><p>" + QuestionObject.choices[0] + "</p><p>" + QuestionObject.choices[1] + "</p><p>" + QuestionObject.choices[2] + "</p><p>" + QuestionObject.choices[3] + "</p></ul>"
}

initializeGame();

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  //
  // if (minutes === 0) {
  //   minutes = "00";
  // }
  //
  // else if (minutes < 10) {
  //   minutes = "0" + minutes;
  // }

  return seconds;
}

// Fisher-Yates shuffler...

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
