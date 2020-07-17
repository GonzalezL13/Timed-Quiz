function showHighscores() {
    // get scores from localStorage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        // create li element
        var liElement = document.createElement("li");
        liElement.textContent = score.initials + " - " + score.score;

        // display on page
        var ol = document.getElementById("highscores");
        ol.appendChild(liElement);
    });
}

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

// run function when on the page
showHighscores();