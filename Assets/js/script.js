var container = document.querySelector(".container");
var timerVal = 75;
var timrVal = document.getElementById("timrVal");
timrVal.textContent = timerVal; 
var timeInterval;
let savedScores = JSON.parse(localStorage.getItem("scores")) || [];

window.addEventListener('load', (event) => {
    document.getElementById("quizSection").classList.add("d-none");
    document.getElementById("initialSection").classList.add("d-none"); 
    document.getElementById("scoresSection").classList.add("d-none"); 
     
  });  

var questions = [
    {
        "title" : "Commonly used datatypes DO NOT include:",
        "options" : ["Strings","Booleans","Alerts","Numbers"],
        "answer" : "Alerts"
    },
    {
        "title" : "Arrays in JavaScript can be used to store __________",
        "options" : ["Numbers and Strings","Other Arrays","Booleans","All of the above"],
        "answer" : "All of the above"
    },
    {
        "title" : "The condition in an if / else statement is enclosed with _________",
        "options" : ["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
        "answer" : "Curly Brackets"
    },
    {
        "title" : "String values must be enclosed within ________ when being assigned to variables",
        "options" : ["Commas","Curly Brackets","Parenthesis","Quotes"],
        "answer" : "Quotes"
    },
    {
        "title" : "A very useful tool used during development and debugging for printing content to the debugger is:",
        "options" : ["Javascript","Terminal/Bash","For Loops","console.log"],
        "answer" : "console.log"
    },
];

var quesIndex = 0;
var startButton = document.querySelector("#btn");
console.log('***startButton'+startButton);

startButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("startSection").classList.add("d-none");
    document.getElementById("quizSection").classList.remove("d-none");
    console.log('***startButton'+startButton);
    countdown();
    showQuestion();
})

submitButton.addEventListener("click",function(event) {
    var initialInput = document.getElementById("initial");
    console.log('***initial'+initialInput.value+timerVal);
    var keyVal = initialInput.value;
    console.log('***keyVal'+keyVal);
    if(keyVal === null || keyVal === '') {
        window.alert('Please input an initial');
    } else {
        savedScores.push({keyVal, timerVal});
        
        localStorage.setItem("scores", JSON.stringify(savedScores));
        document.getElementById("scoresSection").classList.remove("d-none");
        document.getElementById("initialSection").classList.add("d-none");
        document.getElementById("viewScores").classList.add("d-none");

        savedScoresJson = JSON.parse(localStorage.getItem("scores"));
        
        if(savedScoresJson.length >0) {
            var savedScoresJsonSorted = savedScoresJson.sort((a, b) => parseFloat(b.timerVal) - parseFloat(a.timerVal));
            for(i=0;i<savedScoresJsonSorted.length;i++) {
                var liVar = document.createElement("p");
                liVar.class="text-justify";
                liVar.style = "background-color:#808080";
                liVar.textContent = savedScoresJsonSorted[i].keyVal + "-" + savedScoresJsonSorted[i].timerVal;
                document.getElementById("scores").appendChild(liVar);
            }
        } else {
            var liVar = document.createElement("p");
            liVar.class="text-justify";
            liVar.style = "background-color:#808080";
            liVar.textContent = "No saved scores"
            document.getElementById("scores").appendChild(liVar);
        }
    }
})

goBackButton.addEventListener("click",function(event) {
    console.log('****timerVal'+timerVal);
    document.getElementById("startSection").classList.remove("d-none");
    document.getElementById("scoresSection").classList.add("d-none");
    window.location.reload(); 
})

viewScores.addEventListener("click",function(event) {
    document.getElementById("scoresSection").classList.remove("d-none");
    document.getElementById("startSection").classList.add("d-none");
    document.getElementById("quizSection").classList.add("d-none");
    document.getElementById("initialSection").classList.add("d-none");

    document.getElementById("viewScores").classList.add("d-none");

    savedScoresJson = JSON.parse(localStorage.getItem("scores"));

    if(savedScoresJson != null && savedScoresJson.length >0) {
        var savedScoresJsonSorted = savedScoresJson.sort((a, b) => parseFloat(b.timerVal) - parseFloat(a.timerVal));
        for(i=0;i<savedScoresJsonSorted.length;i++) {
            var liVar = document.createElement("p");
            liVar.class="text-justify";
            liVar.style = "background-color:#808080";
            liVar.textContent = savedScoresJsonSorted[i].keyVal + "-" + savedScoresJsonSorted[i].timerVal;
            document.getElementById("scores").appendChild(liVar);
        }
    } else {
        var liVar = document.createElement("p");
        liVar.class="text-justify";
        liVar.style = "background-color:#808080";
        liVar.textContent = "No saved scores"
        document.getElementById("scores").appendChild(liVar);
    }
      
})

clearScoresButton.addEventListener("click",function(event) {  
    localStorage.removeItem("scores");
    window.location.reload();
})

function showQuestion() {
    var currentQues = questions[quesIndex];

    quesVar = document.createElement("h4");
    quesVar.textContent = currentQues.title;
    document.getElementById("question").innerHTML = '';
    document.getElementById("question").appendChild(quesVar);
    document.getElementById("options").innerHTML = '';

    for(x=0;x<currentQues.options.length;x++) {    
        divVar = document.createElement("div");
        divVar.style = "margin:5px";
        btnVar = document.createElement("button");
        btnVar.className = 'btn btn-primary';

        btnVar.textContent = currentQues.options[x];
        btnVar.addEventListener("click",checkAnswer);
        divVar.appendChild(btnVar);       
        document.getElementById("options").appendChild(divVar);
    }
};


function checkAnswer(event) {
    console.log('***quesIndex '+quesIndex);
    if(questions[quesIndex].answer === event.target.innerText) {
        document.getElementById("showAnswer").textContent = 'Correct!';
    } else {
        timerVal -= 10;
        timrVal.textContent = timerVal; 
        document.getElementById("showAnswer").textContent = 'Wrong Answer!';
    }
    quesIndex++;
    if(quesIndex < questions.length) {
        showQuestion();
    } else {
        //End game
        document.getElementById("initialSection").classList.remove("d-none");
        document.getElementById("quizSection").classList.add("d-none");
        document.getElementById("finalTimerVal").textContent =  timerVal;  
        endQuiz();
    }
};

function countdown() {
  
    timeInterval = setInterval(function () {
        timerVal--;
        timrVal.textContent = timerVal; 
        if(timerVal <= 0) {
           clearInterval(timeInterval);  
           document.getElementById("initialSection").classList.remove("d-none");
           document.getElementById("quizSection").classList.add("d-none");
        }                 
    }, 1000);
}

function endQuiz() {
    clearInterval(timeInterval);
}


