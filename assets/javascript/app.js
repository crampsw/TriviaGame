var trivia = {

    rightAnswers: 0, //These three track the scores
    wrongAnswers: 0,
    expiredAnswers: 0,
    questionNumber: 0, //Will be incremented, stepping the game through the questions.

    //Objects created by the question function are pushed here.
    questionArray: [], 

    //This updates the play screen based on the index of questionArray the game is at.
    updateQuestions: function(index) {
        $("#question-holder").text(this.questionArray[index].question);
        for(i = 0; i < 4; i++) {
            $("#answer-" + i).text(this.questionArray[index].answers[i]);
            } //BUG BUG BUG - assigns text to the elements at one index higher than expected
    },
    //This will increment through the questionNumber property and tie the game logic together
    gameLoop: function() {
        this.updateQuestions(questionNumber);
        //Check to see if questionNumber > questionArray.length
        //If the button with the right answer is pressed
            //increment rightAnswers
            //delay, increment question number 
            //loop back to update?
        //If wrong answer is pushed
            //increment wrongAnswers
            //delay, increment question number
            //loop back to update
        //if time expires
            //expiredAnswers gets incremented
            //delay, increment
            //loop
    },

}

function question (array) {
    this.question = array[0];
    this.answerIndex = array[1];
    this.answers = [];
    for(i = 2; i < array.length; i++) {
        this.answers.push(array[i]);
    }
    trivia.questionArray.push(this);
}

var testArray0 = ["Hello?0", 1, "No0","Yes0","No0","No0"]
var testArray1 = ["Hello?1", 3, "No1","No1","No1","Yes1"]
var testArray2 = ["Hello?2", 0, "Yes2","No2","No2","No2"]

var testObj0 = new question(testArray0);
var testObj1 = new question(testArray1);
var testObj2 = new question(testArray2);
