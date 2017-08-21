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
            $("#answer-holder").addClass("btn-success").removeClass("btn-danger");
            this.answerDisplay();
            this.rightAnswers++;
        }
        //If wrong answer is pushed
        if (val != this.questionArray[this.questionNumber].answerIndex) {
            $("#answer-holder").addClass("btn-danger").removeClass("btn-success");
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

var testArray0 = ["An OT is preparing to evaluate a toddler who has upper extremity orthopedic concerns. How will the OT MOST likely obtain the majority of initial assessment data? ", "(C) Observation of child during activities in the child-care center. Through observation of the child during child-care center activities (answer C), the OT can collect information about the child’s motor performance skills and participation in activities that require upper extremity/hand skill. Naturalistic observation is a method of ecologic assessment, which is ‘a primary mechanism for obtaining data relevant to the child’s performance context.... Skilled observation of a child performing a functional task offers...important information about the child’s performance’ (p. 207). Answers A, B, and D are all appropriate choices after the child is old enough for these assessments. See Reference: Case-Smith & O’Brien. (2010). Stewart, K.B.: Purposes, processes, and methods of evaluation.",2 ,"A. Measurement tools that assess visual-motor skills. ", "B. Dynamometer and pinch meter readings. ", "C. Observation of child during activities in the child-care center. ", "D. Functional independence measures."]
var testArray1 = ["During an initial evaluation, the OT suspects that a child has somatodyspraxia. In what area should the OT focus the evaluation? ", "(D) New motor task planning. Answer D, new motor task planning, is correct. ‘Somatodyspraxia is described as a deficit in learning new motor skills, planning new motor actions, and generalizing motor plans’ (p. 140). Inability to print or write (answer A) is termed ‘dysgraphia.’ The term ‘dyslexia’ (answer B) means dysfunction in reading. Inability to perform mathematics (answer C) is known as ‘dyscalculia.’ See Reference: Hinojosa & Kramer. (2009). Schaaf, R.C., Schoen, S.A., Smith Roley, S., Lane, S.J., Koomar, J., & May-Benson, T.A.: A frame of reference for sensory integration.", 3, "A. Ability to print or write. ", "B. Reading competency. ", "C. Math calculations. ", "D. New motor task planning."]
var testArray2 = ["An OT working in a long-term care facility needs to evaluate the long-term memory of a resident. Which of the following methods is BEST for evaluating memory of personally experienced events (declarative memory)? ", "(B) Ask the individual how he spent New Year’s. ‘Declarative memory is one aspect of long term memory and includes conscious memory for events, knowledge or facts’ (p. 802). It is commonly assessed through verbal interviews and informal testing such as asking a question about an individual’s recall of personal events (answer B). Working memory refers to ‘the temporary storage of information while one is working with it or attending to it’ (answer A). ‘Prospective memory involves the ability to remember intentions or activities that will be required in the future’ (answer D) (p. 802). Knowing the date, place, and time is indicative of orientation (answer C). See Reference: Schell, Gillen, & Scaffa. (2014). Toglia, J.P., Golisz, K.M., & Goverover, Y.: Cognition, perception, and occupational performance.",1 ,"A. Show the person a series of objects and ask him to recall the objects within 60 seconds. ", "B. Ask the individual how he spent New Year’s. ", "C. Have the individual state the place, date, and time. ", "D. Ask the client to remember to bring a specific item to the next therapy session. "]
var testArray3 = ["A child avoids playground equipment that requires her feet to be off the ground. What does this behavior MOST likely indicate? ", "(C) Gravitational insecurity. Gravitational insecurity is described as ‘fear response to movement’ (p. 161). The child easily experiences a fear of falling and prefers to keep her feet firmly on the ground. Tactile defensiveness (answer A) is a term used to describe discomfort with various textures and with unexpected touch. Somatodyspraxia (answer B) has its ‘foundation in somatosensory (e.g., primarily tactile but also proprioceptive) discrimination deficits, which interfere with the development of body scheme and awareness’ (p. 124). Bilateral integration and sequencing deficits are related to ‘poor vestibularproprioceptive discrimination, which interferes with the ability to coordinate, sequence, and execute motor actions quickly and efficiently’ (p. 124). See Reference: Hinojosa and Kramer, 2009. Schaaf, R.C., Schoen, S.A., Smith Roley, S., Lane, S.J., Koomar, J., & May-Benson, T.A.: A frame of reference for sensory integration; Kaplan, M.: A frame of reference for motor skill acquisition.", 2 , "A. Difficulty modulating proprioception. ", "B. Somatodyspraxia. ", "C. Gravitational insecurity. ", "D. Bilateral integration/sequencing deficit. "]
var testArray4 = ["When the OT suspects tactile defensiveness as a rationale for a child’s challenges, in what area of participation should the OT focus on FIRST? ","(B) Dressing habits. Answer B, dressing habits, is correct. Children with tactile defensiveness are ‘bothered by tactile aspects of daily living activities...specific types of clothing...specific textured materials’ (p. 135t). The child may be bothered by certain textures or avoid wearing turtlenecks, socks, or shoes. Conversely, some children may never take off their shoes to avoid tactile stimulation. Play behavior (answer A), social skills (answer C), and the choice of hobbies (answer D) could be affected secondarily, as a result of intolerance to certain textures or human touch. Knowledge of the child’s dressing habits will give the OT key information at the start of the evaluation process. See Reference: Hinojosa & Kramer. (2009). Schaaf, R.C., Schoen, S.A., Smith Roley, S., Lane, S.J., Koomar, J., & May-Benson, T.A.: A frame of reference for sensory integration.",1 , "A. Play behavior. ", "B. Dressing habits. ", "C. Social skills. ", "D. Leisure interests. "]
var testArray5 = ["An OT is working with an individual with schizophrenia who is in the process of preparing to move from a state hospital to a group home. During a baking group, the client becomes agitated and leaves the room when another client uses the electric hand mixer to mix the cake batter, and again when two clients begin to argue loudly about which type of icing to use. How would the OT BEST describe the behavior? ", "(B) Sensory avoiding. The individual’s actions are indicative of sensory avoiding behavior, characterized by a low threshold to stimuli perceived as noxious, followed by an active response such as leaving the room. Individuals with sensory avoiding behavior may ‘become distressed in situations in which they cannot control the environment’ and ‘do well in low stimulus situations or settings that others find dull’ (p. 292). An individual with low registration (answer A), sensory seeking behavior (answer C), or a hearing impairment (answer D) would not have difficulty with the auditory stimulation caused by the roar of the mixer or loud voices. See Reference: Brown & Stoffel. (2011). Brown, C. & Nicholson, R.: Sensory skills.",1, "A. Low registration. ", "B. Sensory avoiding. ", "C. Sensation seeking. ", "D. A hearing impairment. "]
var testArray6 = ["During a self-care evaluation of an individual who recently sustained a brain injury, the OT instructs the individual to comb his hair immediately after he washes his face. The individual washes his face quickly, but then the therapist must give him several reminders to comb his hair. The OT is MOST likely to identify this as a deficit in what area? ", "(A) Working memory. ‘Working memory is the temporary storage of information while one is working with it or attending to it. It includes the ability to recall information immediately after exposure. It allows one to focus conscious attention and keeps track of information as one is performing an activity’ (p. 802). This individual’s inability to comb his hair without reminders suggests a deficit in working memory (answer A). Judgment (answer B), the ability to make realistic and safe decisions based on available environmental information, would not be needed for this task. Because the person performed the first request, hearing (answer C) would seem to be intact. Abstraction (answer D) is the ability to extrapolate information from an idea to generalize to another situation and would not be needed to follow this direction. See Reference: Schell, Gillen & Scaffa. (2014). Toglia, J.P. et al: Cognition, perception, and occupational performance.",0, "A. Working memory. ", "B. Judgment. ", "C. Hearing. ", "D. Abstraction. "]
var testArray7 = ["A supermarket employee with obsessive-compulsive disorder takes an hour to stock 24 soup cans on the shelf because once he has placed the cans on the shelf, he removes them and starts over, stating that 'all the labels were not lined up exactly in the same direction.' Which of the following methods would MOST effectively evaluate this individual’s work performance? ","(A) On-site observation of performance skills. Individuals with obsessive-compulsive disorder often experience difficulties with work. Observation in a situational context (answer A) is ‘likely to be more useful in fully understanding their behavioral success’ and is ‘the preferred approach for assessing work function of persons with psychiatric disabilities’ (p. 701). There is nothing to suggest the individual has a cognitive deficit or a need for cognitive assessment (answer B). Interview (answer C) is most useful for assessing an individual’s readiness for work, occupational development, and interests. Task evaluation with a ‘clean’ medium (answer D) may be indicated for individuals with OCD of the washing type. However, this individual has OCD of the checking type. See Reference: Brown & Stoffel. (2011). Pitts, D.B.: Work as occupation.",0, "A. On-site observation of performance skills. ", "B. Formal cognitive assessment. ", "C. Verbal interview focusing on the requirements of the job. ", "D. Task evaluation using a 'clean' medium such as a puzzle. "]
var testArray8 = ["An OT has been working with an individual who is recovering from a TBI. A standard pivot transfer has been successfully demonstrated in the gym. The MOST appropriate way to assess generalization of this new learning would be to have the patient perform which activity? ","(C) Attempt a standard pivot transfer from wheelchair to bed in the patient’s hospital room. Giving the individual a functional task, then changing it, and observing the response will tell the therapist how well the individual can transfer learning to new situations. ‘Transfer of learning, or generalization of skill, is seen when the learner is able to spontaneously perform the task in different environments’ (p. 109). If the individual cannot perform the activity when it is changed slightly, then there may be difficulty transferring learning. If the patient can perform the activity with many changes and in a different setting, it suggests a greater aptitude for transfer of learning to new situations. None of the other answers assesses the ability to transfer learning. See Reference: Pedretti. (2013). Richardson, P.: Teaching activities in occupational therapy.",2, "A. Identify potential hazards in the patient’s bathroom at home that could make transferring unsafe. ", "B. Select an appropriate tub bench and nonskid mat for the patient’s bathroom at home. ", "C. Attempt a standard pivot transfer from wheelchair to bed in the patient’s hospital room. ", "D. Attempt a sliding board transfer from wheelchair to tub. "]
var testArray9 = ["An OT is working with an individual with depression who is cognitively intact but demonstrating difficulty carrying out self-care and other ADL tasks. The OT, who has no advanced certifications, would like to identify a standardized assessment to measure ADL performance. Which is the MOST appropriate tool for this purpose? ","(C) Kohlman Evaluation of Living Skills. The Kohlman Evaluation of Living Skills (answer C) ‘combines interview items with simulated performance’ to obtain information about ‘(s)eventeen living skills, in the areas of self-care, safety and health, money management, transportation and telephone, and work and leisure’ (p. 666). The Assessment of Motor and Process Skills (answer D) assesses an individual’s motor and process skills, sometimes embedding a task that is an ADL category. In order to administer the AMPS, one must have special training, so the OT could not begin using it immediately. The Routine Task Inventory (answer B) uses observation to assess 14 different areas of ADL and is based on the cognitive disabilities model, which would not be appropriate for this client. The Bay Area Functional Performance Evaluation (answer A) was designed to measure performance skills such as memory, organization, attention span, test completion, motivation, and frustration tolerance. It also includes a social interaction scale that assesses verbal and nonverbal social interaction behaviors. Although it can help the OT develop conclusions about ADL performance, it is not actually an ADL evaluation tool. See Reference: Brown & Stoffel. (2011). Brown, C.: Activities of daily living and instrumental activities of daily living.",2, "A. Bay Area Functional Performance Evaluation. ", "B. Routine Task Inventory-Expanded. ", "C. Kohlman Evaluation of Living Skills. ", "D. Assessment of Motor and Process Skills. "]


var testObj0 = new question(testArray0);
var testObj1 = new question(testArray1);
var testObj2 = new question(testArray2);
var testObj3 = new question(testArray3);
var testObj4 = new question(testArray4);
var testObj5 = new question(testArray5);
var testObj6 = new question(testArray6);
var testObj7 = new question(testArray7);
var testObj8 = new question(testArray8);
var testObj9 = new question(testArray9);