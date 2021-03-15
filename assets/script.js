//Declation of variables
const startBtn = document.querySelector(".startBtn button");
const question_box = document.querySelector(".question_box");
const replayBtn = document.querySelector(".replayBtn");
var opt0 = document.querySelector("#opt0"); 
var opt1 = document.querySelector("#opt1"); 
var opt2 = document.querySelector("#opt2"); 
var opt3 = document.querySelector("#opt3");
var possible_answers = document.querySelector('.possible_answers');
const next_question = document.querySelector('#Next');
const summary_box =document.querySelector(".summary_box");
var summary_text = document.querySelector('.summary_text');
var userScore = 0;
let question_count = 0;
let timeLeft = document.querySelector('.time_seconds');
var secondsLeft = 75;

const questions = [
    {
        numb: 1, 
        question: 'Commonly used JavaScript data types DO NOT include which item below?', 
        answer: "Alerts",
        options: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ]
    },
    {
        numb: 2, 
        question: 'The condition in an if/else statement is enclosed within ___________ .', 
        answer: "Parentheses",
        options: [
            "Quotes",
            "Curly Brackets",
            "Parentheses",
            "Square Brackets"
        ]
    },
    {
        numb: 3, 
        question: 'Arrays in JavaScript can be used to store ____________ .', 
        answer: "all of the above",
        options: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ]
    },
    {
        numb: 4, 
        question: 'String values must be enclosed within ________________ when being assigned to variables.', 
        answer: "quotes",
        options: [
            "commas",
            "curley brackets",
            "quotes",
            "parentheses"
        ]
    },
    {
        numb: 5, 
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        answer: "console.log()",
        options: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log()"
        ]
    
    }
];

const quizSummary = [ {

    summaryTime: 'You have run out of Time!',
},
    {    
    summaryFinish: 'You have completed the quiz!'
    }
];

//Starting Quiz
startBtn.onclick = ()=>{
    question_box.classList.add('activeQuiz');
    questionDisplay(question_count);
    timerSet();
   };
   
//Function to begin timer
function timerSet () {
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timeLeft.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    }
    }, 1000); 

    return;
};

//function to pull quiz question and answer text from arrays put them into the HTML
function questionDisplay(index){
    const question_text = document.querySelector('.question_text'); 
    // //changing question text with the questions from the array
    question_text.textContent = questions[index].question; 
    // // //changing answers text with the answers from the array
    opt0.textContent = questions[index].options[0];
    opt1.textContent = questions[index].options[1];
    opt2.textContent = questions[index].options[2];
    opt3.textContent = questions[index].options[3];
    

// //Could possibly use a for loop here:
// for (i = 0 ; i < questions[index].options.length ; i++){
// document.querySelector("#opt"+i+1).textContent = question[index].options[i] }
};

possible_answers.addEventListener("click", function(e){
    console.log(e.target.textContent)
    if(e.target.textContent == questions[question_count].answer){
        console.log(questions[question_count].numb, "correct");
        userScore = userScore +1; 
        console.log(userScore);
        alert ("That is CORRECT!")
        localStorage.setItem(questions[question_count].numb, "correct");

    }
    else{
        secondsLeft = secondsLeft - 15;
        console.log(questions[question_count].numb, "wrong");
        alert ("Nope, that is WRONG! Minus 15 seconds.")
        localStorage.setItem(questions[question_count].numb, "wrong");
    }

    function quizEnd () {


    }
//next question incremented
question_count++;
//display next question
questionDisplay(question_count)

});

function endQuiz () {
    question_box.classList.remove('activeQuiz');
    summary_box.classList.add ('activeSummary');
    score_text.textContent = 'You got' + userScore + 'questions correct! Enter your initials to see the high scores.';

    if(secondsLeft <= 0) {
        summary_text.textContent = 'You ran out of time!';

    }else{
        summary_text.textContent = 'You finished the quiz!'
    }

};