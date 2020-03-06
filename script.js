//var buttons
let startBtn = document.getElementById("startBtn")
let btn1 = document.getElementById('btn1')
let submit = document.getElementById("submit")
let goBackBtn = document.getElementById("goBack")
let HSbtn = document.getElementById("HS")

//general Var
let score = 20
let timer 

//var Container Elements
let mainContainer = document.getElementById("main")
let questionsContainer = document.getElementById("questions")
let highScoresContainer = document.getElementById("highScores")
let doneContainer = document.getElementById("done")
//sub Containers
let HSboard = document.getElementById('HSboard') //parent

//Librarie

let Q = [obj = {question : 'pregunta 1?', answers : ['opt1 java', 'opt2 python', 'opt3 c++', 'opt4 html']},   // Q[0].question1 Q[0].Object.keys(a) Q[0].b Q[0].c Q[0].d
         obj = {question : 'pregunta 2?', answers : ['opt1 diego', 'opt2 nacho', 'opt3 pancho', 'opt4 nico']}, 
         obj = {question : 'pregunta 3?', answers : ['opt1 dog', 'opt2 cat', 'opt3 monkey', 'opt4 pig']},
         obj = {question : 'pregunta 4?', answers : ['opt1 up', 'opt2 down', 'opt3 left', 'opt4 right']}]


//Functions
//Question Container
let startGame = function (){
    mainContainer.classList.add('hide');
    questionsContainer.classList.remove('hide');
    
    //QUIZ starts

    //Local Var
    let question = document.getElementById("question")
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")

    //Question iterator
    let i = 0;

    //Initial Question
    question.innerHTML = Q[i].question
    btn1.innerHTML = Q[i].answers[0]
    btn2.innerHTML = Q[i].answers[1]
    btn3.innerHTML = Q[i].answers[2]
    btn4.innerHTML = Q[i].answers[3]

    //Set Next Question 
    let nextQuestion = function (){
        
        //change Questions
        question.innerHTML = Q[i+1].question
        btn1.innerHTML = Q[i+1].answers[0]
        btn2.innerHTML = Q[i+1].answers[1]
        btn3.innerHTML = Q[i+1].answers[2]
        btn4.innerHTML = Q[i+1].answers[3]
        i++

        
        
        

    }
    //click btns
    //btn1.addEventListener("click", finish);
    btn1.addEventListener("click", nextQuestion);
    btn2.addEventListener("click", nextQuestion);
    btn3.addEventListener("click", nextQuestion);
    btn4.addEventListener("click", nextQuestion);

}
//All Done! - submit HS
let finish = function (){
    questionsContainer.classList.add('hide');
    doneContainer.classList.remove('hide');


}

//HighScore Board      fix when time is out
let goHighScores = function(){
    doneContainer.classList.add('hide');
    questionsContainer.classList.add('hide');
    mainContainer.classList.add('hide');
    highScoresContainer.classList.remove('hide');

    //input Var
    let initialsVal = document.getElementById("initials").value;

    //add new HighScore
    let newHS = document.createElement('p');
    newHS.setAttribute("class", "listE");
    newHS.innerHTML = initialsVal + "------------------------>" + score;
    HSboard.appendChild(newHS);


}
//Back to Main
let goBack = function(){
    highScoresContainer.classList.add('hide');
    mainContainer.classList.remove('hide');

}


//click events

startBtn.addEventListener("click", startGame);
submit.addEventListener("click", goHighScores); //Go HighScore Board and Save initials on Board
goBackBtn.addEventListener("click", goBack);
HSbtn.addEventListener("click", goHighScores);






