var trivia = {

    rightAnswers: 0, //These three track the scores
    wrongAnswers: 0,
    expiredAnswers: 0,
    questionNumber: 0, //Will be incremented, stepping the game through the questions.

    //Objects created by the question function are pushed here.
    questionArray: [], 

    //This updates the play screen based on the index of questionArray the game is at.
    updateQuestions: function() {
        $(".answer-pot").show();
        $("#answer-holder").hide();
        if (this.questionNumber < this.questionArray.length) {
            $("#question-holder").text(this.questionArray[this.questionNumber].question);
            $("#answer-holder").text("");
            for(i = 0; i < 4; i++) {
                var answerHolder = this.questionArray[this.questionNumber].answers[i];
                $("#answer-" + i).text(answerHolder);
                } //Yes, this whole for loop could be "$("#answer-" + i).text(this.questionArray[index].answers[i])", but it was giving me some strange behavior. I may change this if I give it another pass.
        } else {
            $("#question-holder").text("Quiz Complete! See below for your score.");
            $("#answer-0").text("Number Correct:");
            $("#answer-1").text(this.rightAnswers);
            $("#answer-2").text("Number Inorrect:");
            $("#answer-3").text(this.wrongAnswers);
        }
    },
    gameInit: function() { 
        this.rightAnswers = 0;
        this.wrongAnswers = 0;
        this.expiredAnswers = 0;
        this.questionNumber = 0;
        this.updateQuestions();
    },

    cycle: function() {
        this.questionNumber++;
        this.updateQuestions();

    },

    answerDisplay: function() {
        $("#answer-holder").show();
        $("#answer-holder").text(this.questionArray[this.questionNumber].answerText + " Click to Continue!");
        $(".answer-pot").hide();

    },

    gameHandler: function(val) {
        //If the button with the right answer is pressed
        if (val == this.questionArray[this.questionNumber].answerIndex) {
            this.answerDisplay();
            this.rightAnswers++;
        }
        //If wrong answer is pushed
        if (val != this.questionArray[this.questionNumber].answerIndex) {
            this.answerDisplay();
            this.wrongAnswers++;
        }
    },
    
    
    // timeUp: function() {
    //     this.expiredAnswers++

    // }

}

$(document).ready(function() {   
    trivia.gameInit();
    $(".answer-pot").on("click", function() {
        trivia.gameHandler(this.value);
    });
    $("#answer-holder").on("click", function() {
        trivia.cycle();
    });
});

function question (array) {
    this.question = array[0];
    this.answerIndex = array[2];
    this.answerText = array[1];
    this.answers = [];
    for(i = 3; i < array.length; i++) {
        this.answers.push(array[i]);
    }
    trivia.questionArray.push(this);
}

//Add your data here. Question array format is [Question as string, Answer with explanation as string, Index of correct answer 0-3 as int, Answer 0, Answer 1, Answer 2, Answer 3]

var testArray0 = ["Is this an example question for question 0?", "B. Yes: Here's an example answer explanation for question 0", 1, "A. No","B. Yes","C. No","D. No"]
var testArray1 = ["Is this an example question for question 1?", "C. Yes: Here's an example answer for question 1", 2, "A. No","B. No","C. Yes","D. No"]
var testArray2 = ["Is this an example question for question 2?", "A. Yes: Here's an example answer for question 2", 0, "A. Yes","B. No","C. No","D. No"]

var testObj0 = new question(testArray0);
var testObj1 = new question(testArray1);
var testObj2 = new question(testArray2);
