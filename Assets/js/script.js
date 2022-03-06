var container = document.querySelector(".container");
var timerVal = 75;
var timrVal = document.getElementById("timrVal");
timrVal.textContent = timerVal; 
var timeInterval;

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

/*
var quesArray = [
    "Commonly used datatypes DO NOT include",
    "Arrays in JavaScript can be used to store"
];

var optArray1 = [
    {val:"Strings",attr:"false"},
    {val:"Booleans",attr:"false"},
    {val:"Alerts",attr:"optArray2"},
    {val:"Numbers",attr:"false"}
];

var optArray2 = [
    {val:"Numbers and Strings",attr:"false"},
    {val:"Other Arrays",attr:"false"},
    {val:"Booleans",attr:"false"},
    {val:"All of the above",attr:"true"}
];

const quesMap = new Map();

quesMap.set(quesArray[0], optArray1);
quesMap.set(quesArray[1], optArray2); */

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
    var scoreMap = [];
    var keyVal = initialInput.value;
    scoreMap.push({keyVal, timerVal});
    
    localStorage.setItem("scores", JSON.stringify(scoreMap));
    document.getElementById("scoresSection").classList.remove("d-none");
    document.getElementById("initialSection").classList.add("d-none");
})

goBackButton.addEventListener("click",function(event) {
    console.log('****timerVal'+timerVal);
    document.getElementById("startSection").classList.remove("d-none");
    document.getElementById("scoresSection").classList.add("d-none");
   // timrVal.textContent = 75;
    window.location.reload(); 
})

viewScores.addEventListener("click",function(event) {
    document.getElementById("scoresSection").classList.remove("d-none");
    document.getElementById("startSection").classList.add("d-none");
    document.getElementById("quizSection").classList.add("d-none");
    document.getElementById("initialSection").classList.add("d-none");

    let savedScores = [];
    savedScores = JSON.parse(localStorage.getItem("scores"));
    
   // var size = savedScores.length;
   // console.log('***savedScores'+savedScores[0].initial);
})

clearScoresButton.addEventListener("click",function(event) {
  //  console.log('***initial'+initialInput+timerVal);
   // localStorage.clear;
    localStorage.removeItem("scores");
})

function showQuestion() {
   // console.log('***startButton'+startButton);
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
   // var totalTime = 75;
  
    timeInterval = setInterval(function () {
        timerVal--;
        timrVal.textContent = timerVal; 
        if(timerVal <= 0) {
           clearInterval(timeInterval);  
        }                 
    }, 1000);
}

function endQuiz() {
   // window.location.reload();

    clearInterval(timeInterval);
   /* quesIndex = 0;
    document.getElementById("showAnswer").classList.add("d-none"); */
}

/*
container.addEventListener("click", function(event) {
    var element = event.target;
    console.log('element: '+element);

    var quesVar='';
    var textVar='';
    var divVar = '';
    var btnVar = '';
    var nodeVar = '';

    if(element.matches(".btn")) {   
        
        
        quesVar = document.createElement("h1");
        textVar = document.createTextNode(quesArray[0]);
        quesVar.appendChild(textVar);
        document.getElementById("question").appendChild(quesVar);

        for(x=0;x<=optArray1.length-1;x++) {    
            divVar = document.createElement("div");
            divVar.className = optArray1[x].attr;
            btnVar = document.createElement("button");
            btnVar.className = optArray1[x].attr;
            nodeVar = document.createTextNode(optArray1[x].val);
            btnVar.appendChild(nodeVar);
            divVar.appendChild(btnVar);
    
            document.getElementById("options").appendChild(divVar);
        }
       // showOptions(quesMap.get(quesArray[0]));
      /*  for(i=0;i<=quesArray.length-1;i++) {
            if(i===0) {
                const quesVar = document.createElement("h1");
                const textVar = document.createTextNode(quesArray[i]);
                quesVar.appendChild(textVar);
                document.getElementById("question").appendChild(quesVar);
                showOptions(optArray1);
            } 
            /*else if(i===1) {
                const quesVar2 = document.createElement("h1");
                const textVar2 = document.createTextNode(quesArray[i]);
                quesVar2.appendChild(textVar2);
                document.getElementById("question").appendChild(quesVar);
                for(x=0;x=optArray2.length-1;x++) {
                    const divVar = document.createElement("div");
                    const btnVar = document.createElement("button");
                    const nodeVar = document.createTextNode(optArray2[x]);
                    btnVar.appendChild(nodeVar);
                    divVar.appendChild(btnVar);
        
                    document.getElementById("options").appendChild(divVar);
                }
            } 
        } */
  /*  }  
    
    if(element.matches(".optArray2")) {
        console.log('Clickevent');
        var arrVal = '';
        const quesVar = document.createElement("h1");
        const textVar = document.createTextNode(quesArray[1]);
        quesVar.appendChild(textVar);
        document.getElementById("question").appendChild(quesVar); 
        document.getElementById("question").textContent = quesArray[1];   
       // showOptions(quesMap.get(quesArray[1]));

        for(x=0;x<=optArray2.length-1;x++) {
            arrVal = optArray1[x].attr;
            console.log('>>>> 1 '+ document.getElementsByClassName('.optArray1[x].attr').textContent);
            console.log('>>>> optArray2[x]: '+ optArray2[x].val);
            console.log('>>>> optArray1[x]: '+ optArray1[x].val);
           // btnVar.className = optArray2[x].attr;
            document.getElementsByClassName('.optArray1[x].attr').textContent = optArray2[x].val;
        }

    }

    if(element.matches(".false")) {
        alert('Wrong Answer');
    }
}); */
/*
function showOptions(arrayName) {
    for(x=0;x<=arrayName.length-1;x++) {
        // console.log('i: '+i);
        // console.log('i: '+arrayName[i]);

         const divVar = document.createElement("div");
         const btnVar = document.createElement("button");
         btnVar.className = arrayName[x].attr;
         const nodeVar = document.createTextNode(arrayName[x].val);
         btnVar.appendChild(nodeVar);
         divVar.appendChild(btnVar);

         document.getElementById("options").appendChild(divVar);
     }
} */
