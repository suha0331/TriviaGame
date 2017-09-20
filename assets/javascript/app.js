$(document).ready(function() {

    //Timer starts as soons as the page is loaded.
    window.onload = function() {
        var seconds_left = 31;
        var interval = setInterval(function() {
            document.getElementById('timerDisplay').innerHTML = "<h3>" + --seconds_left + " seconds left</h3>";
            console.log(seconds_left + " seconds left");

            if (seconds_left <= 0) {
                document.getElementById('timerDisplay').innerHTML = "<h3>Time is up!" + "<br>" + "Do you want to try it again?</h3>";
                clearInterval(interval);
                $("#test").hide();
                $("#submitButton").hide();
                $("#result_button").hide();

                displayResult();
                console.log(displayResult);
            }
        }, 1000);

    };

    function displayResult() {
        $("#timerDisplay").hide();
        $("#test").hide();
        $("#submitButton").hide();
        $("#result_button").hide();
        $("#result").html("<h3>This is your result!</h3>");
        calculateResult();
    }


    // Since there are 5 questions, 5 answers(radio) should be selected
    function answerScore() {
        var radioCount = document.getElementsByClassName('question');

        for (var i = 0, length = radioCount.length; i < length; i++) {
            if (radioCount[i].checked) {
                var answerValue = Number(radioCount[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    //This doesn't work
    var calculateScore = answerScore('score');
    // var questionNumber = document.getElementById('score');

    // Shows the correct answers for wrong answers.
    function correctAnswer(score, questionNumber) {
        console.log("Question Number: " + questionNumber);
        return ("The correct answer for question #" + questionNumber + ": " +
            (document.getElementById(score).innerHTML));
    }


    //This doesn't work
    function calculateResult() {

        if (answerScore('q1') === 0) {
            document.getElementById('correctAnswer1').innerHTML = correctAnswer('score1', 1);
        }

        if (answerScore('q2') === 0) {
            document.getElementById('correctAnswer2').innerHTML = correctAnswer('score2', 2);
        }
        if (answerScore('q3') === 0) {
            document.getElementById('correctAnswer3').innerHTML = correctAnswer('score3', 3);
        }
        if (answerScore('q4') === 0) {
            document.getElementById('correctAnswer4').innerHTML = correctAnswer('score4', 4);
        }
        if (answerScore('q5') === 0) {
            document.getElementById('correctAnswer5').innerHTML = correctAnswer('score5', 5);
        }

        //This doesn't work
        // counting how many questions there are.
        var questionCount = document.getElementsByClassName('question');

        var questionCounter = 0;
        for (var i = 0, length = questionCount.length; i < length; i++) {
            questionCounter++;
        }

        //This doesn't work
        // show score as "score/possible score"
        var showScore = "<h3>Your Score: " + calculateScore + "/" + questionCounter + "</h3>";
        // if 4/4, "perfect score!"
        if (calculateScore === questionCounter) {
            showScore = showScore + "<h3>You guys are besties!</h3>"
        };
        document.getElementById('userScore').innerHTML = showScore;
        console.log(showScore);
    };

    $("#result_button").on("click", function() {
        calculateResult();
    });


});