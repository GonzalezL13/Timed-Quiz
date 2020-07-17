var time = 70;
var myInterval = 1000;
var timerStart;
var latestQuestionIndex = 0;
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var submitEl = document.getElementById("submit");
var initialsEl = document.getElementById("initials");


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
    if (this.value !== questions[latestQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
    }
    else {
        feedbackEl.textContent = "Correct!";
    }
    latestQuestionIndex++;
    if (latestQuestionIndex === questions.length) {
        endQuiz();
    }
    else {
        getQuestions();
    }

}

function endQuiz() {
    //stop timer
    clearInterval(timerStart);
    //show the last screen after quiz
    var endQuizEl = document.getElementById("end-quiz");
    endQuizEl.removeAttribute("class");
    //hide the questions
    questionsEl.setAttribute("class", "hidden");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
}

function createTimer() {
    //this will update the time
    time--;
    timerEl.textContent = time;
    //check if time ran out
    if (time <= 0) {
        endQuiz();
    }
}

function saveHighScore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure there is a value
    if (initials !== "") {
        // get saved scores from localstorage
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        // formats the scores
        var newScore = {
            score: time,
            initials: initials
        };

        // saves to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // next page
        window.location.href = "highscores.html";
    }
}

startBtn.addEventListener("click", startQuiz);
submitEl.addEventListener("click", saveHighScore);
