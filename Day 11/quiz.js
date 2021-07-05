var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.optionA;
  opt2.textContent = q.optionB;
  opt3.textContent = q.optionC;
  opt4.textContent = q.optionD;
}

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please select your Answer!");
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Submit";
  }
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.innerHTML = "You Score : " + score;
  }
  loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
