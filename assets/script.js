//Declation of variables
const startBtn = document.querySelector(".startBtn button");
const question_box = document.querySelector(".question_box");
const replayBtn = document.querySelector(".replayBtn");


//Starting Quiz
startBtn.onclick = ()=>{
    question_box.classList.add('activeQuiz');
    questionDisplay(0);
   };

let question_count = 0;

//function to pull quiz question and answer text from arrays in other JS file and putting them into the HTML
function questionDisplay(index){
    const question_text = document.querySelector('.question_text'); 
    const possible_answers = document.querySelector('.possible_answers');
    let question_tag = '<span>'+ questions[index].question + '</span>'; //taking question from the questions array to pull into the HTML
    let answer_tag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>' //taking answers from the questions arrays and populating the answer boxes 
                        + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                        + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                        + '<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    question_text.innerHTML = question_tag; //changing question text with the questions from the array
    possible_answers.innerHTML = answer_tag; //changing answers text with the answers from the array

};