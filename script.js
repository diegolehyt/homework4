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


//Functions
//Question Container
let startGame = function (){
    mainContainer.classList.add('hide');
    questionsContainer.classList.remove('hide');
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
btn1.addEventListener("click", finish);
submit.addEventListener("click", goHighScores); //Go HighScore Board and Save initials on Board
goBackBtn.addEventListener("click", goBack);
HSbtn.addEventListener("click", goHighScores);

//Librarie

let Q = [obj1 = {question : 'pregunta?',a : true, b : false, c : false, d : false}, 15, 33]




