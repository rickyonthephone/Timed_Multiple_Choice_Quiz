//Declation of variables
const startBtn = document.querySelector(".startBtn button");
const question_box = document.querySelector(".question_box");
const replayBtn = document.querySelector(".replayBtn");


//Starting Quiz
startBtn.onclick = ()=>{
    question_box.classList.add('activeQuiz');
}

// Question arrays with question number, question, choices and answers
let questions = [
    {
        numb: 1, 
        question: 'Commonly used JavaScript data types <em>DO NOT </em>include which item below?', 
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
        answer: "Parenthesis",
        options: [
            "Quotes",
            "Curly Brackets",
            "Parenthesis",
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
            "parenthesis"
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

let question_count = 0;

//Pulling quiz question text from arrays in other JS file and putting them into the HTML
function questionDisplay(index){
    const question_text = document.querySelector('.question_text'); 
    const possible_answers = document.querySelector('.possible_answers');
    let question_tag = '<span>'+ questions[index].question + '</span>';
    let answer_tag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>'
                        + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                        + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                        + '<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    question_text.textContent = question_tag;
    possible_answers.textContent = answer_tag; 

};

questionDisplay(3);