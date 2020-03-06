//-------------------------------------------------part 1-------------------------------------------------------------------
//var buttons
let startBtn = document.getElementById("startBtn")
let submit = document.getElementById("submit")
let goBackBtn = document.getElementById("goBack")
let HSbtn = document.getElementById("HS")

//general Var
let score = 0;
let time = 60;

//var Container Elements
let mainContainer = document.getElementById("main")
let questionsContainer = document.getElementById("questions")
let highScoresContainer = document.getElementById("highScores")
let doneContainer = document.getElementById("done")
//sub Containers
let HSboard = document.getElementById('HSboard') //parent

//Librarie Questions

let Q = [obj = {question : 'pregunta 1?', answers : ['java', 'python', 'c++', 'html', 'java']},   // Q[0].question1 target
         obj = {question : 'pregunta 2?', answers : ['diego', 'nacho', 'pancho', 'nico', 'nacho']}, 
         obj = {question : 'pregunta 3?', answers : ['dog', 'cat', 'monkey', 'pig', 'monkey']},
         obj = {question : 'pregunta 4?', answers : ['up', 'down', 'left', 'right', 'right']}]


//-------------------------------------------------------part 2 ----------------------------------------------------

//Question Container
let startGame = function (){
    mainContainer.classList.add('hide');
    questionsContainer.classList.remove('hide'); //hide highscores as well
    
    //--------QUIZ starts HERE!-----------

    //timer function
    let timerFun = setInterval( function(){
        let timer = document.getElementById("timer")
        time = time - 1
        timer.innerHTML = time
        if (time <= 0){
            clearInterval(timerFun)
        }
    },1000)    
        

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
    // 1
    let nextQuestion1 = function (){
        //check

        if (Q[i].answers[0] == Q[i].answers[4]){
            score = score + 10;
            alert('correct')
        }
        else{
            time = time - 10;
            alert('wrong')
        }
        
        //change Questions
        question.innerHTML = Q[i+1].question
        btn1.innerHTML = Q[i+1].answers[0]
        btn2.innerHTML = Q[i+1].answers[1]
        btn3.innerHTML = Q[i+1].answers[2]
        btn4.innerHTML = Q[i+1].answers[3]
        i++
    }
    // 2
    let nextQuestion2 = function (){
        //check

        if (Q[i].answers[1] == Q[i].answers[4]){
            score = score + 10;
            alert('correct')
        }
        else{
            time = time - 10;
            alert('wrong')
        }
        
        //change Questions
        question.innerHTML = Q[i+1].question
        btn1.innerHTML = Q[i+1].answers[0]
        btn2.innerHTML = Q[i+1].answers[1]
        btn3.innerHTML = Q[i+1].answers[2]
        btn4.innerHTML = Q[i+1].answers[3]
        i++
    }
    // 3
    let nextQuestion3 = function (){
        //check

        if (Q[i].answers[2] == Q[i].answers[4]){
            score = score + 10;
            alert('correct')
        }
        else{
            time = time - 10;
            alert('wrong')
        }
        
        //change Questions
        question.innerHTML = Q[i+1].question
        btn1.innerHTML = Q[i+1].answers[0]
        btn2.innerHTML = Q[i+1].answers[1]
        btn3.innerHTML = Q[i+1].answers[2]
        btn4.innerHTML = Q[i+1].answers[3]
        i++
    }
    // 4
    let nextQuestion4 = function (){
        //check

        if (Q[i].answers[3] == Q[i].answers[4]){
            score = score + 10;
            alert('correct')
        }
        else{
            time = time - 1;
            alert('wrong')
        }
        
        //change Questions
        question.innerHTML = Q[i+1].question
        btn1.innerHTML = Q[i+1].answers[0]
        btn2.innerHTML = Q[i+1].answers[1]
        btn3.innerHTML = Q[i+1].answers[2]
        btn4.innerHTML = Q[i+1].answers[3]
        i++
    }
    

    //click next btns
    //btn1.addEventListener("click", finish);
    btn1.addEventListener("click", nextQuestion1);
    btn2.addEventListener("click", nextQuestion2);
    btn3.addEventListener("click", nextQuestion3);
    btn4.addEventListener("click", nextQuestion4);
}
//---------------------------------------------------- part 3 ---------------------------------------------------------------------
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






