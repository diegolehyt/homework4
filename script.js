//-------------------------------------------------part 1-------------------------------------------------------------------
//var buttons
let startBtn = document.getElementById("startBtn")
let submit = document.getElementById("submit")
let goBackBtn = document.getElementById("goBack")
let HSbtn = document.getElementById("HS")

//var Container Elements
let mainContainer = document.getElementById("main")
let questionsContainer = document.getElementById("questions")
let highScoresContainer = document.getElementById("highScores")
let doneContainer = document.getElementById("done")
//sub Containers
let HSboard = document.getElementById('HSboard') //parent

//change question Function
let nextQuestion = function(){
    question.innerHTML = Q[i+1].question
    btn1.innerHTML = Q[i+1].answers[0]
    btn2.innerHTML = Q[i+1].answers[1]
    btn3.innerHTML = Q[i+1].answers[2]
    btn4.innerHTML = Q[i+1].answers[3]
    i++
    return
}

//Librarie Questions

let Q = [obj = {question : 'pregunta 1?', answers : ['java', 'python', 'c++', 'html', 'java']},   // Q[0].question target
         obj = {question : 'pregunta 2?', answers : ['diego', 'nacho', 'pancho', 'nico', 'nacho']}, 
         obj = {question : 'pregunta 3?', answers : ['dog', 'cat', 'monkey', 'pig', 'monkey']},
         obj = {question : 'pregunta 4?', answers : ['up', 'down', 'left', 'right', 'right']},
         obj = {question : 'pregunta 5?', answers : ['garlic', 'celery', 'potato', 'carrot', 'garlic']},
         obj = {question : 'pregunta 6?', answers : ['yellow', 'red', 'black', 'purple', 'red']}]


//-------------------------------------------------------part 2 ----------------------------------------------------

//Question Container
let startGame = function (){
    mainContainer.classList.add('hide');
    questionsContainer.classList.remove('hide'); //hide highscores button as well
    
    //--------QUIZ starts HERE!-----------

    //set timeDown Var
    let time = 30; //go back to 60 after
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
            questionsContainer.classList.add('hide');
            doneContainer.classList.remove('hide');
            clearInterval(timerFun);
            
            
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
            alert('correct')
        }
        else{
            time = time - 10;
            alert('wrong')
        }
        if (i == 5){
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
            alert('correct')
        }
        else{
            time = time - 10;
            alert('wrong')
        }
        if (i == 5){
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
            alert('correct')
        }
        else{
            time = time - 10;
            alert('wrong')
        }
        
        if (i == 5){
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
            alert('correct');
        }
        else{
            time = time - 10;
            alert('wrong');
        }

        if (i == 5){
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
    
    //---------------------------------------------------- part 3 ---------------------------------------------------------------------
    //click next btns
    
    btn1.addEventListener("click", nextQuestion1);
    btn2.addEventListener("click", nextQuestion2);
    btn3.addEventListener("click", nextQuestion3);
    btn4.addEventListener("click", nextQuestion4);

    

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
    newHS.innerHTML = initialsVal + "----------------------------------->" + score;
    HSboard.appendChild(newHS);



    }
    //Back to Main
    let goBack = function(){
        highScoresContainer.classList.add('hide');
        mainContainer.classList.remove('hide');
        location.reload(true)
    }

    //click events
    submit.addEventListener("click", goHighScores); //Go HighScore Board and Save initials on Board
    goBackBtn.addEventListener("click", goBack);
    HSbtn.addEventListener("click", goHighScores);
}
//---------------------------------------------------- part 4 ---------------------------------------------------------------------

startBtn.addEventListener("click", startGame);









