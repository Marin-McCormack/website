// quiz.js

var numCorrect = 0;

function takeQuiz() {
    var response = "";
    var points = 0;
    var q1 = "Which country won the FIFA World Cup in 2018?";
    var a1 = "FRANCE";
    var q2 = "In which sport would you perform a slam dunk?";
    var a2 = "BASKETBALL";
    var q3 = "Who is considered the 'King of Clay' in tennis?";
    var a3 = "RAFAEL NADAL";

    response = prompt(q1, "");
    if (response) points = runningTotal(response.toUpperCase() === a1 ? 1 : 0);

    response = prompt(q2, "");
    if (response) points = runningTotal(response.toUpperCase() === a2 ? 1 : 0);

    response = prompt(q3, "");
    if (response) points = runningTotal(response.toUpperCase() === a3 ? 1 : 0);

    alert("You answered a total of " + points + " correctly out of 3 questions.");
    numCorrect = 0;
    points = 0;
}

function runningTotal(i) {
    numCorrect += i;
    return numCorrect;
}

