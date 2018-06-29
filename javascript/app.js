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
    this.choices = [{name:obj.wrong1, value:false}, {name:obj.wrong2, value:false}, {name:obj.wrong3, value:false}, {name:obj.right, value:true}]
    this.rightChoice = this.choices[3]
    shuffle(this.choices);
  }
}
let timeInterval;
function startTimer() {
  let timeRemainingDiv = document.getElementById("timeRemaining")

  timeInterval = setInterval(() => {
    timer--;
    timeRemainingDiv.innerHTML = timeConverter(timer);
    if (timer < 0) {
      timeRemainingDiv.innerHTML = "<span>00 <strong> Time's up! <strong></span>"
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
// ===================================================================================
  let questionDiv = document.getElementById("question");
  let answerDiv = document.getElementById("answerChoices");
  QuestionObject = new Question;
  questionDiv.innerHTML = QuestionObject.question;
// ===================================================================================
// Make buttons dynamic / with values of true or false for correct or incorrect
  answerDiv.innerHTML = "";

  let newButtons = QuestionObject.choices.map((x) => {
    let newButton = document.createElement('button');
    let textNode = document.createTextNode(x.name);
    let br = document.createElement('br');
    newButton.setAttribute("value", x.value);

    // Put all button functionality here
    newButton.onclick = () => {console.log(x.value)}
  // ===================================================================================

    newButton.appendChild(textNode);
    answerDiv.appendChild(br);
    answerDiv.appendChild(newButton)
  })
}

initializeGame();
// ===================================================================================

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return seconds;
}

// Fisher-Yates shuffler for shuffling my choices array

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
