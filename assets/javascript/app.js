// Variable Declarations
var timer = 120;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 0;

// Array of Trivia Questions
var triviaQuestions = [{
    question: "What is the name of the small black dog Elliott owned?",
    answerList: [" Snowball ", " Flipper ", " Barkley ", " Doodle ", " Ranger "],
    answer: 1
},{
    question: "What is Dominique DiPierro's job?",
    answerList: ["Hostess", "CIA Agent", "Software Developer", "FBI Agent"],
    answer: 3
},{
    question: "Who was Shayla's drug supplier with whom Elliott gets involved?",
    answerList: ["Fernando", "Cisco", "Phillip", "White Rose", "Tyrell"],
    answer: 1
},{
    question: "What was the name of Darlene's Dark Army Boyfriend",
    answerList: ["Cisco", "Darrell", "Ollie", "Phillip", "Mobley"],
    answer: 0
},{
    question: "Who plays the role of Angela Moss?",
    answerList: ["Carly Chaikin", "Grace Gummer", "Sandrine Holt", "Portia Doubleday"],
    answer: 3
}];

$("#start").on("click", function() {

    // Makes start button hidden
    $(this).hide();

    // Start timer countdown
    runGame();
   
    // Trivia Question 1
    $("#question1").html("<h3>" + triviaQuestions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + triviaQuestions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + triviaQuestions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + triviaQuestions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + triviaQuestions[0].answerList[3] + "</label><br><br>"
    );

    // Trivia Question 2
    $("#question2").html("<h3>" + triviaQuestions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + triviaQuestions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + triviaQuestions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + triviaQuestions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + triviaQuestions[1].answerList[3] + "</label><br><br>"
    );

    // Trivia Question 3
    $("#question3").html("<h3>" + triviaQuestions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + triviaQuestions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + triviaQuestions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + triviaQuestions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + triviaQuestions[2].answerList[3] + "</label><br><br>"
    );

    // Trivia Question 4
    $("#question4").html("<h3>" + triviaQuestions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + triviaQuestions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + triviaQuestions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + triviaQuestions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + triviaQuestions[3].answerList[3] + "</label><br><br>"
    );

    // Trivia Question 5
    $("#question5").html("<h3>" + triviaQuestions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + triviaQuestions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + triviaQuestions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + triviaQuestions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + triviaQuestions[4].answerList[3] + "</label><br><br>"
    );

    // Done button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    // Click event runs displayScore() and displayResults() when Done button is pressed
    $("#done").on("click", function() {

        // Displays correct, incorrect and unanswered values
        displayScore();

        // Displays Results
        displayResults();
        
    });
});

// Function for Timer countdown
function runGame() {
    clearInterval(intervalId);
    intervalId = setInterval(decreaseTime, 1000);
}

// Function that decreases time left to answer the questions
function decreaseTime() {

    //  Decrease timer by one (second)
    timer--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Left: " + timer + " seconds</h2>" + "<br>");

    if (timer === 0) {
        // Run stop function to stop timer countdown and end game / display results if user runs out of time
        stop();
        displayScore();
        displayResults();
    }
}

//stop & clear intervalId
function stop() {
    clearInterval(intervalId);
}

// Function keeps score based off users answers
function displayScore() {
    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();

    // Question 1 Logic
    if (userAnswer1 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer1 == triviaQuestions[0].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }

    // Question 2 Logic
    if (userAnswer2 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer2 == triviaQuestions[1].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }

    // Question 3 Logic
    if (userAnswer3 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer3 == triviaQuestions[2].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }

    // Question 4 Logic
    if (userAnswer4 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer4 == triviaQuestions[3].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }

    // Question 5 Logic
    if (userAnswer5 === undefined) {
        unansweredQuestions++;
    }
    else if (userAnswer5 == triviaQuestions[4].answer) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
    }
}

// Displays Results based on users answers
function displayResults() {
    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#submit").hide();
    $("#resultsMessage").html("<h3>Here are your results:</h3>");
    $("#correct").html("Correct Answers: " + rightAnswers);
    $("#incorrect").html("Incorrect Answers: " + wrongAnswers);
    $("#unanswered").html("Unanswered Questions: " + unansweredQuestions);
}

