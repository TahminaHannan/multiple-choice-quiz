var mainEl = document.getElementById("main");
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var choicesElements = document.querySelectorAll('.choice-text')
var feedbackEl = document.getElementById('feedback')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

var timer = null;
var secondsLeft = 60;


//When the button is pressed the timer begins from 60 seconds
startButton.addEventListener('click', function() {
  if (timer === null) {
      timer = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = "Time: " + secondsLeft + " seconds remaining";
          if(secondsLeft === 0) {
              clearInterval(timer);
              alert('Time is up!');
              return;
          }
      }, 1000);
      startGame();
  }
});
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    if (!questions.length) {
        alert('No questions available')
        return
    }
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    // Event listener for "click" event on "next-btn" button
    var nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', setNextQuestion);
}

function setNextQuestion() {
    if (currentQuestionIndex === shuffledQuestions.length) {
      console.log("Quiz over");
      clearInterval(timer);
      alert(
        "Quiz over! Your score is " + score + "/" + shuffledQuestions.length
      );
      return;
    }
    var choicesButtons = document.getElementById("choices-buttons");
    choicesButtons.innerHTML = ""; 
    questionElement.innerText = shuffledQuestions[currentQuestionIndex].question;
    shuffledQuestions[currentQuestionIndex].choices.forEach((choice, index) => {
      var button = document.createElement("button");
      button.innerText = choice;
      button.classList.add("btn");
      if (choice === shuffledQuestions[currentQuestionIndex].answer) {
        button.classList.add("correct");
      }
      button.addEventListener("click", selectAnswer);
      choicesButtons.appendChild(button);
    });
  
    feedbackEl.innerText = "";
    currentQuestionIndex++;
   
    var questionNumberElement = document.getElementById("question-number");
    questionNumberElement.innerText =
      "Question " + currentQuestionIndex + " of " + shuffledQuestions.length;
  }
  

  

  function selectAnswer(e) {
    var selectedButton = e.target;
    var correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.disabled = true;
      if (button.innerText === correctAnswer) {
        button.classList.add("correct");
      }
      if (button.innerText !== correctAnswer && button !== selectedButton) {
        button.classList.add("incorrect");
      }
    });
    if (selectedButton.innerText === correctAnswer) {
      feedbackEl.innerText = "Correct!";
      selectedButton.classList.add("correct");
    } else {
      feedbackEl.innerText = "Incorrect";
      selectedButton.classList.add("incorrect");
    }
    setTimeout(function () {
      setNextQuestion();
      buttons.forEach((button) => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        button.disabled = false;
      });
    }, 1000);
  }
  


//questions array
var questions = [         
    {   question: "What is the capital of France?",                
        choices: ["Paris", "London", "Dhaka"],
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa??",
        choices: ["Leonardo di Caprio", "Leonardo da Vinci", "Teenage Mutant Ninja Turtles - Leonardo"],
        answer: "Leonardo da Vinci"
    },
    {
      question: "How many months are there in a year?",
      choices: ["3", "6", "12"],
      answer: "12"
  },
    {
        question: "What is the capital of Japan?",
        choices: ["Tokyo", "Kyoto", "Osaka"],
        answer: "Tokyo"
    },
    {
    question: "What is an integer",
    choices: ["The Alphabet", "A day in the week", "A whole number"],
    answer: "A whole number"
},
{
  question: "What colour is the grass",
  choices: ["Green", "Purple", "Orange"],
  answer: "Green"
},
{
  question: "Which of these is the correct spelling: desperate, desparate, or desparete?",
  choices: ["desparete", "desparate", "desperate"],
  answer: "desperate"
}
]

