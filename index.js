const dataForQuestions = [
    {
    number: 1,
    question: 'Oh no! Your car will not start but your neighbor kindly gives your car a “jump” and it starts "Whoo-hoo!" But once you turn off the engine it will not start again. This is likely an issue with which part of your car?',
    answers: [
    'Battery', 'Alternator', 'Radiator', 'Fuel Gauge',
    ],
      correctAnswer: 'Battery',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 2,
      question: 'You start your car and hear a loud noise from the rear of the car and then a bad exhaust smell fills the car. Which of the below options is probably the issue?',
      answers: [
      'Cracked Radiator', 'Short in the battery', 'Muffler', 'Bad brakes and rotors',
  ],
      correctAnswer: 'Muffler',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 3,
      question: 'There is a squeaking sound when you press your brake pedal. Which of the below items needs to be replaced?',
      answers: [
      'Brakes and rotors', 'Gear shift', 'Engine issue', 'Windows',
      ],
        correctAnswer: 'Brakes and rotors',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 4,
      question: 'Your automatic windows are going “up and down” slower than usual, what is likely the issue?',
      answers: [
      'Low fuel', 'Battery', 'Engine', 'Window motor',
      ],
      correctAnswer: 'Window motor',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 5,
      question: 'The most essential part to steering your vehicle is?',
      answers: [
      'The gear shift', 'The steering wheel', 'The rear view mirror', 'The side mirrors',
      ],
      correctAnswer: 'The steering wheel',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 6,
      question: 'Your ______ is registering that you are going 60 miles per hour. Which of the below items will complete the statement?', 
      answers: [
        'Odometer', 'Speedometer', 'Manometer', 'Hydrometer',
        ],
      correctAnswer: 'Speedometer',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 7,
      question: 'Vehicles hydro-plane at higher than how many miles per hour?',
      answers: [
      '5', '10', '25', '35',
      ],
      correctAnswer: '35',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 8,
      question: 'The heater in your car is blowing cool air, What is likely the issue ?',
      answers: [
      'Gear shift', 'Engine', 'Vents', 'Car heater',
      ],
      correctAnswer: 'Car heater',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 9,
      question: 'Your  tires are balding, what should you do?',
      answers: [
      'Check the engine', 'Check the wheel bearing', 'Check your brakes', 'Buy new tires',
      ],
      correctAnswer: 'Buy new tires',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    },
    {
      number: 10,
      question: 'One of your timing chains broke. You need to get which part of your car checked?',
      answers: [
      'The fuel gauge', 'Fender', 'Engine', 'Carburetor',
      ],
    correctAnswer: 'Engine',
      icon: 'https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif',
      alt: 'Race Car picture'
    }
];


function startQuiz() { 
  $('.openingPage').on('click', function(event) {
  $('.openingPage').remove();
  $('.formAndCss').css('display', 'block')
});
}

function questionInHtml() {
  $('.formAndCss').html(makeQuestion());
}

function makeQuestion () {
  if (selectedQuestion < dataForQuestions.length) {
    return `
    <div class="formStyling">
    <h2>${dataForQuestions[selectedQuestion].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${dataForQuestions[selectedQuestion].answers[0]}" name="answer" required>
    <span class="answersSpan">${dataForQuestions[selectedQuestion].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${dataForQuestions[selectedQuestion].answers[1]}" name="answer" required>
    <span class="answersSpan">${dataForQuestions[selectedQuestion].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${dataForQuestions[selectedQuestion].answers[2]}" name="answer" required>
    <span class="answersSpan">${dataForQuestions[selectedQuestion].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${dataForQuestions[selectedQuestion].answers[3]}" name="answer" required>
    <span class="answersSpan">${dataForQuestions[selectedQuestion].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>
    <div id="status-bar">
      <span id="question-count">Question: ${dataForQuestions[selectedQuestion].number}/10</span>
      <span id="score-count">Score: ${scoreUpdater}/${selectedQuestion}</span>
    </div>`
  } else {
    finalResults();
    restartQuiz();
  }
}

let selectedQuestion = 0;
let scoreUpdater = 0; 

function selectedAnswer(){
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${dataForQuestions[selectedQuestion].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}
function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

function userAnswerFeedbackCorrect () {
  let correctAnswer = `${dataForQuestions[selectedQuestion].correctAnswer}`;
  $('.formAndCss').html(`<div class="correctFeedback"><p>Correct! Stay on course, you're doing great!<b></b></p><div class="correctAnswerIcon"><img src="${dataForQuestions[selectedQuestion].icon}" alt="You got it right!"/></div><br><button type="button" class="nextButton">Next Question</button></div>`);
}

function userAnswerFeedbackWrong () {
  let correctAnswer = `${dataForQuestions[selectedQuestion].correctAnswer}`;
  $('.formAndCss').html(`<div class="incorrectFeedback"><p><b>You were so close but stalled at the finish line,</b><br>the right answer is <span id="wrong-right">"${correctAnswer}"</span></p><div class="incorrectAnswerIcon"><img src="${dataForQuestions[selectedQuestion].icon}" alt="${dataForQuestions[selectedQuestion].alt}"/></div><br><button type="button" class="nextButton">Next Question</button></div>`);
}

function newQuestion () {
  selectedQuestion++;
$('.selectedQuestion').text(selectedQuestion+1);
  }

function loadNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    newQuestion();
    questionInHtml();
    selectedAnswer();
  });
}

  function changeScore () {
  scoreUpdater++;
}

function updateScore () {
  changeScore();
  $('.scoreUpdater').text(scoreUpdater);
}
function finalResults () {
  if (scoreUpdater >= 7) {
    $('.formAndCss').html(`<div class="results correctFeedback"><h3>You're Practically a car "Guru"!</h3><img class="sevenPlus" src="https://media.giphy.com/media/Vfhj19PusenfO/giphy.gif" alt="car icon" role="img"/><p>You got ${scoreUpdater} / 10</p><p>You're vehicle must be in tip-top shape!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (scoreUpdater < 7 && scoreUpdater >= 5) {
    $('.formAndCss').html(`<div class="results correctFeedback"><h3>Don't be afraid to slow down and get your car checked-out every once in a while.</h3><img class="sevenToFive" src="https://media.giphy.com/media/124NH7ohOmpWak/giphy.gif" alt="icon"role="img"/><p>You got ${scoreUpdater} / 10</p><p>But you didn't do to bad, good job!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.formAndCss').html(`<div class="results correctFeedback"><h3>You hit a couple of bumps along the way but a good mechanic can get you right back on course.</h3><img class="underFive" src="https://media.giphy.com/media/3ov9k00BjclOeZfKrC/giphy.gif" alt="icon" role="img"/><div class="fourAndBelow"><p>You got ${scoreUpdater} / 10</p><p>Drive safe and don't be afraid to take your car for a check-in.</p></div><button class="restartButton">Restart Quiz</button></div>`);
  }
}

function restartQuiz () {

  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

function createQuiz () {
  startQuiz();
  questionInHtml();
  selectedAnswer();
  loadNextQuestion();
  
}

$(createQuiz);

    

