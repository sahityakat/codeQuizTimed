var container = document.querySelector(".container");

window.addEventListener('load', (event) => {
    document.getElementById("quizSection").style.display = 'none';
  }); 

var questions = [
    {
        "title" : "Commonly used datatypes DO NOT include",
        "options" : ["Strings","Booleans","Alerts","Numbers"],
        "answer" : "Alerts"
    },
    {
        "title" : "Arrays in JavaScript can be used to store",
        "options" : ["Numbers and Strings","Other Arrays","Booleans","All of the above"],
        "answer" : "All of the above"
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
    document.getElementById("startSection").style.visibility = 'hidden';
    document.getElementById("startSection").height = 0;
    console.log('***startButton'+startButton);
    showQuestion();
})

function showQuestion() {
    console.log('***startButton'+startButton);
    
    document.getElementById("quizSection").style.display = 'block';

    var currentQues = questions[quesIndex];

    quesVar = document.createElement("h1");
    quesVar.textContent = currentQues.title;
    document.getElementById("question").innerHTML = '';
    document.getElementById("question").appendChild(quesVar);
    document.getElementById("options").innerHTML = '';

    for(x=0;x<currentQues.options.length;x++) {    
        divVar = document.createElement("div");
        btnVar = document.createElement("button");
      //  btnVar.className = 'btn btn-secondary';

        btnVar.textContent = currentQues.options[x];
        btnVar.addEventListener("click",checkAnswer);
        divVar.appendChild(btnVar);       
        document.getElementById("options").appendChild(divVar);
    }
};

function checkAnswer(event) {
    if(questions[quesIndex].answer === event.target.innerText) {
        alert('Correct');
    } else {
        alert('Wrong');
    }
    quesIndex++;
    if(quesIndex < questions.length) {
        showQuestion();
    } else {
        // End the game
    }
};
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
