const levelBtns = document.querySelectorAll('.level-btn');
const questionContainer = document.getElementById('question-container');
let selectedLevel = 'easy';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 300;

levelBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    selectedLevel = e.target.dataset.level;
    loadQuestions(selectedLevel);
    document.getElementById('level-select').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    startTimer();
  });
});

function loadQuestions(level) {
  if (level === 'easy') {
        questions = [
            { question: 'What is 5 + 3?', options: ['6', '7', '8'], answer: '8', type: 'math' },
            { question: 'What is 7 - 4?', options: ['3', '4', '2'], answer: '3', type: 'math' },
            { question: 'What comes after "C" in the alphabet?', options: ['D', 'E', 'B'], answer: 'D', type: 'english' },
            { question: 'What color is the sky?', options: ['Blue', 'Red', 'Green'], answer: 'Blue', type: 'general' },
            { question: 'Which number is greater: 10 or 8?', options: ['10', '8'], answer: '10', type: 'math' },
            { question: 'Which animal says "Meow"?', options: ['Dog', 'Cat', 'Cow'], answer: 'Cat', type: 'general' },
            { question: 'What is 2 x 4?', options: ['6', '8', '10'], answer: '8', type: 'math' },
            { question: 'How many vowels are in the word "apple"?', options: ['1', '2', '3'], answer: '2', type: 'english' },
            { question: 'What is the opposite of "hot"?', options: ['Cold', 'Warm', 'Hotter'], answer: 'Cold', type: 'english' },
            { question: 'What is 10 ÷ 2?', options: ['4', '5', '6'], answer: '5', type: 'math' },
            { question: 'How many legs does a spider have?', options: ['6', '8', '4'], answer: '8', type: 'general' },
            { question: 'What color are bananas?', options: ['Green', 'Yellow', 'Red'], answer: 'Yellow', type: 'general' },
            { question: 'Which day comes after Monday?', options: ['Tuesday', 'Wednesday', 'Thursday'], answer: 'Tuesday', type: 'general' },
            { question: 'How many months are in a year?', options: ['10', '11', '12'], answer: '12', type: 'general' },
            { question: 'How many days are in a week?', options: ['5', '6', '7'], answer: '7', type: 'general' }
];

} else if (level === 'medium') {
        questions = [
            { question: 'Solve 15 * 3', options: ['30', '45', '60'], answer: '45', type: 'math' },
            { question: 'What is the antonym of "brave"?', options: ['Coward', 'Strong', 'Heroic'], answer: 'Coward', type: 'english' },
            { question: 'What is 25 ÷ 5?', options: ['4', '5', '6'], answer: '5', type: 'math' },
            { question: 'What is the plural of "child"?', options: ['Children', 'Childs', 'Childes'], answer: 'Children', type: 'english' },
            { question: 'How many sides does a pentagon have?', options: ['4', '5', '6'], answer: '5', type: 'general' },
            { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter'], answer: 'Mars', type: 'general' },
            { question: 'What is 8 x 7?', options: ['54', '56', '64'], answer: '56', type: 'math' },
            { question: 'What is 36 ÷ 6?', options: ['6', '7', '8'], answer: '6', type: 'math' },
            { question: 'What is the synonym of "big"?', options: ['Small', 'Large', 'Tiny'], answer: 'Large', type: 'english' },
            { question: 'What is the capital of France?', options: ['Paris', 'Rome', 'Berlin'], answer: 'Paris', type: 'general' },
            { question: 'Which word is a noun: "run", "beautiful", or "cat"?', options: ['Run', 'Cat', 'Beautiful'], answer: 'Cat', type: 'english' },
            { question: 'What is 5% of 200?', options: ['10', '20', '15'], answer: '10', type: 'math' },
            { question: 'What is the antonym of "easy"?', options: ['Hard', 'Tough', 'Rough'], answer: 'Hard', type: 'english' },
            { question: 'Which planet is closest to the Sun?', options: ['Mercury', 'Venus', 'Earth'], answer: 'Mercury', type: 'general' },
            { question: 'What is 9 x 9?', options: ['81', '72', '90'], answer: '81', type: 'math' }
];
      
} else if (level === 'hard') {
        questions = [
            { question: 'What is 15% of 200?', options: ['20', '25', '30'], answer: '30', type: 'math' },
            { question: 'Complete the analogy: Cat is to Kitten as Dog is to __?', options: ['Puppy', 'Cub', 'Foal'], answer: 'Puppy', type: 'english' },
            { question: 'Solve 72 ÷ 8', options: ['9', '8', '7'], answer: '9', type: 'math' },
            { question: 'Which of the following is a prime number?', options: ['4', '7', '9'], answer: '7', type: 'math' },
            { question: 'What is the meaning of the word "benevolent"?', options: ['Kind', 'Cruel', 'Boring'], answer: 'Kind', type: 'english' },
            { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra'], answer: 'Canberra', type: 'general' },
            { question: 'What is 125 ÷ 25?', options: ['5', '4', '6'], answer: '5', type: 'math' },
            { question: 'Which is the largest planet in our solar system?', options: ['Saturn', 'Jupiter', 'Uranus'], answer: 'Jupiter', type: 'general' },
            { question: 'What is the synonym of "abundant"?', options: ['Scarce', 'Plentiful', 'Tiny'], answer: 'Plentiful', type: 'english' },
            { question: 'Solve: 144 ÷ 12', options: ['12', '10', '9'], answer: '12', type: 'math' },
            { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway'], answer: 'Harper Lee', type: 'general' },
            { question: 'What is the antonym of "optimistic"?', options: ['Pessimistic', 'Joyful', 'Bright'], answer: 'Pessimistic', type: 'english' },
            { question: 'Which chemical element has the symbol "O"?', options: ['Oxygen', 'Osmium', 'Ozone'], answer: 'Oxygen', type: 'general' },
            { question: 'What is 11 x 11?', options: ['121', '131', '111'], answer: '121', type: 'math' },
            { question: 'Who discovered penicillin?', options: ['Alexander Fleming', 'Marie Curie', 'Louis Pasteur'], answer: 'Alexander Fleming', type: 'general' }
];
}
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <p>${currentQuestion.question}</p>
    ${currentQuestion.options.map((option, index) =>
      `<button class="option-btn" data-answer="${option}">${option}</button>`).join('')}
  `;
  document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(e) {
  const selectedAnswer = e.target.dataset.answer;
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('score').textContent = score;
  document.getElementById('result-message').textContent = `You scored ${score} out of ${questions.length}!`;
}

function startTimer() {
  const timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      displayTime();
    } else {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);
}

function displayTime() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}