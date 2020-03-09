//---------------------------------------------------------part 1-------------------------------------------------------------------
//var buttons
let startBtn = document.getElementById("startBtn")
let submit = document.getElementById("submit")
let goBackBtn = document.getElementById("goBack")
let HSbtn = document.getElementById("HS")
let clearHSbtn = document.getElementById("clearHS")

//var Container Elements
let mainContainer = document.getElementById("main")
let questionsContainer = document.getElementById("questions")
let highScoresContainer = document.getElementById("highScores")
let doneContainer = document.getElementById("done")
//sub Containers
let HSboard = document.getElementById('HSboard') //parent
let scoreNumber = document.getElementById('scoreNumber')
let CoW = document.getElementById('CoW')

//Global Functions

let goHighScores = function(){
    doneContainer.classList.add('hide');
    questionsContainer.classList.add('hide');
    mainContainer.classList.add('hide');
    highScoresContainer.classList.remove('hide');
    HSbtn.innerHTML = null;
    //build HS Board
    HS = localStorage.getItem('HS');
    HS = JSON.parse(HS);
    HSL = HS.length;

    for (let j = 0 ; j < HSL ; j++){
        let newHS = document.createElement('p');
        newHS.setAttribute("class", "listE");
        newHS.innerHTML = HS[j].p + "--------------------------------------------------------------------->" + HS[j].s;
        HSboard.appendChild(newHS);

    }

}
let gBack = function(){
    
    location.reload(true);
}
let clearHS = function(){
    localStorage.clear();
    HSboard.innerHTML = null;
}

//Librarie Questions

let Q = [obj = {question : '1. How would you said "HI" to someone?', answers : ['Hola', 'Chao', 'Bueno', 'Donde', 'Hola']},   // Q[0].question target
         obj = {question : '2. if is before noon you should said "Tenga un buen ___ amigo!"', answers : ['Once', 'Dia', 'Noche', 'Tarde', 'Dia']}, 
         obj = {question : '3. Whats the translation of "DragonFly" insect?', answers : ['Mariposa', 'Cuncuna', 'Libelula', 'Mosquito', 'Libelula']},
         obj = {question : '4. Which of these Countries dose not speak Spanish?', answers : ['Bolivia', 'Paraguay', 'Chile', 'Brazil', 'Brazil']},
         obj = {question : '5. How can ask for a glass of water? "un vaso de ___ porfavor!"', answers : ['Agua', 'Cerveza', 'Vino', 'Bebida', 'Agua']},
         obj = {question : '6. Last Question!, "How much is 9 + 5?"', answers : ['Diecinueve', 'Catorce', 'Trece', 'Veinticuatro', 'Catorce']}]


//-------------------------------------------------------part 2 ------------------------------------------------------------------

//Question Container Function
let startGame = function (){
    HSbtn.innerHTML = null;
    mainContainer.classList.add('hide');
    questionsContainer.classList.remove('hide'); 
    
    //----------------------------------------------QUIZ starts HERE!--------------------------------------------------------------

    //set timeDown Var
    let time = 60; 
    //score var
    score = 0;
    //Question iterator
    let i = 0;

    //timer function
    let timerFun = setInterval( function(){
        let timer = document.getElementById("timer")
        time = time - 1
        timer.innerHTML = time
        if (time <= 0){
            timer.innerHTML = 0;
            scoreNumber.innerHTML = score;
            clearInterval(timerFun);
            questionsContainer.classList.add('hide');
            doneContainer.classList.remove('hide');
        }
    },1000)    
        

    //Local Var
    let question = document.getElementById("question")
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")

    //Initial Question
    question.innerHTML = Q[i].question
    btn1.innerHTML = Q[i].answers[0]
    btn2.innerHTML = Q[i].answers[1]
    btn3.innerHTML = Q[i].answers[2]
    btn4.innerHTML = Q[i].answers[3]

    
    //Set Next Question 
    // 1th Btn
    let nextQuestion1 = function (){
        //check

        if (Q[i].answers[0] == Q[i].answers[4]){
            score = score + 10;
            CoW.innerHTML = 'Correct!'
            
        }
        else{
            time = time - 10;
            CoW.innerHTML = 'Wrong!'
            
        }
        if (i == 5){
            let timer = document.getElementById("timer");
            clearInterval(timerFun);
            timer.innerHTML = 0;
            scoreNumber.innerHTML = score;
            doneContainer.classList.remove('hide');
            questionsContainer.classList.add('hide');
        }
        else {
            //change Questions
            question.innerHTML = Q[i+1].question
            btn1.innerHTML = Q[i+1].answers[0]
            btn2.innerHTML = Q[i+1].answers[1]
            btn3.innerHTML = Q[i+1].answers[2]
            btn4.innerHTML = Q[i+1].answers[3]
            i++
        }
        
    }
    // 2th Btn
    let nextQuestion2 = function (){
        //check

        if (Q[i].answers[1] == Q[i].answers[4]){
            score = score + 10;
            CoW.innerHTML = 'Correct!'
        }
        else{
            time = time - 10;
            CoW.innerHTML = 'Wrong!';
        }
        if (i == 5){
            let timer = document.getElementById("timer");
            clearInterval(timerFun);
            timer.innerHTML = 0;
            scoreNumber.innerHTML = score;
            doneContainer.classList.remove('hide');
            questionsContainer.classList.add('hide');
        }
        else {
            //change Questions
            question.innerHTML = Q[i+1].question
            btn1.innerHTML = Q[i+1].answers[0]
            btn2.innerHTML = Q[i+1].answers[1]
            btn3.innerHTML = Q[i+1].answers[2]
            btn4.innerHTML = Q[i+1].answers[3]
            i++
        }
        
    }
    // 3th Btn
    let nextQuestion3 = function (){
        //check

        if (Q[i].answers[2] == Q[i].answers[4]){
            score = score + 10;
            CoW.innerHTML = 'Correct!';
        }
        else{
            time = time - 10;
            CoW.innerHTML = 'Wrong!';
        }
        
        if (i == 5){
            let timer = document.getElementById("timer");
            clearInterval(timerFun);
            timer.innerHTML = 0;
            scoreNumber.innerHTML = score;
            doneContainer.classList.remove('hide');
            questionsContainer.classList.add('hide');
        }
        else {
            //change Questions
            question.innerHTML = Q[i+1].question
            btn1.innerHTML = Q[i+1].answers[0]
            btn2.innerHTML = Q[i+1].answers[1]
            btn3.innerHTML = Q[i+1].answers[2]
            btn4.innerHTML = Q[i+1].answers[3]
            i++
        }
        
    }
    // 4th Btn
    let nextQuestion4 = function (){
        //check

        if (Q[i].answers[3] == Q[i].answers[4]){
            score = score + 10;
            CoW.innerHTML = 'Correct!';
        }
        else{
            time = time - 10;
            CoW.innerHTML = 'Wrong!';
        }

        if (i == 5){
            let timer = document.getElementById("timer");
            clearInterval(timerFun);
            timer.innerHTML = 0;
            scoreNumber.innerHTML = score;
            doneContainer.classList.remove('hide');
            questionsContainer.classList.add('hide');
        }
        else {
            //change Questions
            question.innerHTML = Q[i+1].question
            btn1.innerHTML = Q[i+1].answers[0]
            btn2.innerHTML = Q[i+1].answers[1]
            btn3.innerHTML = Q[i+1].answers[2]
            btn4.innerHTML = Q[i+1].answers[3]
            i++
        }
    }
    //click next btns
    btn1.addEventListener("click", nextQuestion1);
    btn2.addEventListener("click", nextQuestion2);
    btn3.addEventListener("click", nextQuestion3);
    btn4.addEventListener("click", nextQuestion4);
    
    //---------------------------------------------------- part 3 ---------------------------------------------------------------------
    //HighScore Board Function   
    let submitHighScores = function(){
        
        //input Var
        let initialsVal = document.getElementById("initials").value;
        
        //Set HS in Local Storage
        
        if (localStorage.getItem('HS') === null){
            let highscoresA = [{p : initialsVal, s : score}];
            highscoresA = JSON.stringify(highscoresA);
            localStorage.setItem('HS', highscoresA);
            
        }
        else {
            
            highscoresA = localStorage.getItem('HS');
            highscoresA = JSON.parse(highscoresA);
            highscoresA.push({p : initialsVal, s : score});
            highscoresA = JSON.stringify(highscoresA);
            localStorage.setItem('HS', highscoresA);
            
        }
        //go high score function call, after submit 
        goHighScores();
    }
    //Back to Main
    let goBack = function(){
        highScoresContainer.classList.add('hide');
        mainContainer.classList.remove('hide');
        location.reload(true)
    }

    //Local click events
    submit.addEventListener("click", submitHighScores); //Go HighScore Board and Save initials on Board
    goBackBtn.addEventListener("click", goBack);
    
}
//--------------------------------------------------------- part 4 ---------------------------------------------------------------------
//Global click events
goBackBtn.addEventListener("click", gBack);
startBtn.addEventListener("click", startGame);
HSbtn.addEventListener("click", goHighScores);
clearHSbtn.addEventListener("click", clearHS);









