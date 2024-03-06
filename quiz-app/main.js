const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { option: "a) Hyper Text Markup Language", correct: true },
      { option: "b) High Tech Modern Language", correct: false },
      { option: "c) Hyper Transferable Multimedia Language", correct: false },
      {
        option: "d) Hyperlink and Text Manipulation Language",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: [
      { option: "a) font-color", correct: false },
      { option: "b) color", correct: true },
      { option: "c) text-color", correct: false },
      { option: "d) textColor", correct: false },
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      { option: "a) var myVar;", correct: true },
      { option: "b) variable myVar;", correct: false },
      { option: "c) v myVar;", correct: false },
      { option: "d) let myVar;", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'action' attribute in an HTML form?",
    answers: [
      {
        option: "a) It specifies the method used to submit the form.",
        correct: false,
      },
      {
        option: "b) It defines the form's layout and appearance.",
        correct: false,
      },
      {
        option: "c) It points to the script that will process the form data.",
        correct: true,
      },
      {
        option: "d) It sets the background color of the form.",
        correct: false,
      },
    ],
  },
  {
    question: "How do you call a function named 'myFunction' in JavaScript?",
    answers: [
      { option: "a) run myFunction;", correct: false },
      { option: "b) call myFunction;", correct: false },
      { option: "c) myFunction();", correct: true },
      { option: "d) execute myFunction;", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  answerBtn.innerHTML = "";

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.option;
    button.classList.add("btn");
    answerBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selected = e.target;
  const selectedBtn = e.target;

  selectedBtn.classList.add("selected");
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function showScore() {
  resetState();
  question.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handelNextButton() {
  const selectedAnswer = Array.from(answerBtn.children).find((button) =>
    button.classList.contains("selected")
  );

  if (selectedAnswer) {
    Array.from(answerBtn.children).forEach((button) => {
      button.classList.remove("selected");
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  } else {
    alert("Please select an answer before proceeding.");
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handelNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
