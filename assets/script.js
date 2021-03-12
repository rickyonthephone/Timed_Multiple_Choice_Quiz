//Declation of variables
const startBtn = document.querySelector(".startBtn button");
const question_box = document.querySelector(".question_box");
const replayBtn = document.querySelector(".replayBtn");
const opt0 = document.querySelector("#opt0"); 
const opt1 = document.querySelector("#opt1"); 
const opt2 = document.querySelector("#opt2"); 
const opt3 = document.querySelector("#opt3");
const possible_answers = document.querySelector('.possible_answers');
const next_question = document.querySelector('#Next');
var score = 0;
let question_count = 0;
let timeLeft = document.querySelector('.time_seconds');
var secondsLeft = 60;
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
        answer: "Alerts",
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
//Starting Quiz
startBtn.onclick = ()=>{
    question_box.classList.add('activeQuiz');
    questionDisplay(question_count);
    timerSet();
   };

//function to pull quiz question and answer text from arrays in other JS file and putting them into the HTML
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
//      document.querySelector("#opt"+i+1).textContent = question[index].options[i] }
};

possible_answers.addEventListener("click", function(e){
    console.log(e.target.textContent)
    if(e.target.textContent == questions[question_count].answer){
        console.log("corect!")
    }
    else{
        console.log("wrong!")
    }
});

next_question.addEventListener ('click', function(e) {
    question_count++;
    questionDisplay(question_count)
});

//Function to begin timer
function timerSet () {
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timeLeft.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
    }, 1000); 
}

function checkAnswer(event) {
    event.preventDefault
}