var time = 100;
var myInterval = 1000;
var timerStart;
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");


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



function startQuiz() {
    timerEl.textContent = time;
    timerStart = setInterval(createTimer,myInterval);
    var startQuiz = document.getElementById("start-quiz");
    startQuiz.setAttribute("class", "hidden");
    questionsEl.removeAttribute("class");
};

function createTimer() {
   time--;
   timerEl.textContent = time;
};

startBtn.addEventListener("click", startQuiz);

