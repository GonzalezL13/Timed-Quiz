var time = 100;
var myInterval = 1000;
var timerStart;
var latestQuestionIndex = 0;
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");


var questions = [
    {
        question: "What tag is used to make an unordered bulleted list?",
        choices: ["<ul>", "<li>", "<p>", "<ol>"],
        answer: "<ul>"
    },
    {
        question: "What tag can be used to insert a break or a blank line in HTML document?",
        choices: ["<main></main>", "<section></section>", "<br></br>", "<body></body>"],
        answer: "<br></br>"
    },
    {
        question: "What tag specifies a field where the user can enter data?",
        choices: ["<datalist>", "<dialog>", "<enterpoint>", "<input>"],
        answer: "<input>"
    },
    {
        question: "What is the value called that defines colors such as the following: #fff000?",
        choices: ["RGB Value", "Color Value", "Hex Value", "Decimal Value"],
        answer: "Hex Value"
    },
    {
        question: "In JacaScript what is used in conjuction with HTML to 'react' to certain elements?",
        choices: ["events", "boolean", "condition", "RegExp"],
        answer: "events"
    }

];


//function will start once start quiz button is clicked
function startQuiz() {
    //will display my time
    timerEl.textContent = time;
    //will start with the time i gave myInterval
    timerStart = setInterval(createTimer, myInterval);
    //calling the id so i can hide it once i start the quiz 
    var startQuiz = document.getElementById("start-quiz");
    startQuiz.setAttribute("class", "hidden");
    //the questions will show once i remove the clss which is hidden at the start
    questionsEl.removeAttribute("class");
    //calls the questions function
    getQuestions();
};

function getQuestions() {
    //will show the questions from my array from above
    var latestQuestion = questions[latestQuestionIndex];
    //the heading will now be the question
    var qTitleEl = document.getElementById("question");
    qTitleEl.textContent = latestQuestion.question;
    choicesEl.innerHTML = "";
    //choices loop
    latestQuestion.choices.forEach(function (choice, i) {
        //created buttons for each choice
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        //event listener for when i click on a choice
        choiceBtn.addEventListener("click", chosenClick);
        //choices will display
        choicesEl.appendChild(choiceBtn);
    });
}

function chosenClick() {
    latestQuestion++;
    if (latestQuestion === question.length) {
        endQuiz();
    }
    else {
        getQuestions();
    }

}

function endQuiz() {
    clearInterval(timerStart);
}

function createTimer() {
    time--;
    timerEl.textContent = time;
};

startBtn.addEventListener("click", startQuiz);

