//Declation of variables
const startBtn = document.querySelector(".startBtn button");
const question_box = document.querySelector(".question_box");
const replayBtn = document.querySelector(".replayBtn");


//Starting Quiz
startBtn.onclick = ()=>{
    question_box.classList.add('activeQuiz');
}
