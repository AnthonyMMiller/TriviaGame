
//// Question and answer bank

var questions = [{
    ques: "What two companies currently hold copyrights to Dragon Ball, Dragon Ball Z, and Dragon Ball GT?",
    ans: ["Funimation and Pioneer", "Pioneer And Bird", "Toei and Akira Toriyama", "Funimation and Toei"],
    name: "Dragon Ball",
    correct: "Funimation and Toei",
    divClass: ".db"
},
{
    ques: "What was the first anime series?",
    ans: ["Jungle Taitei", "Speed Racer", "Astro Boy", "Doraemon"],
    name: "first anime",
    correct: "Astro Boy",
    divClass: ".fa"
},
{
    ques: "In Evangelion, where did Asuka Langley Sohryu previously live?",
    ans: ["France", "USA", "Germany", "Japan"],
    name: "evangelion",
    correct: "Germany",
    divClass: ".eva"
},
{
    ques: "Who provided the voice of San in the English dubbed version of Princess Mononoke?",
    ans: ["Claire Danes", "Minnie Driver", "Gillian Anderson", "Jada Pinkett"],
    name: "mononoke",
    correct: "Claire Danes",
    divClass: ".pm"
},
{
    ques: "In Tenchi Muyo, what is Tenchi's name?",
    ans: ["Suzuki", "Muyo", "Masaki", "Misato"],
    name: "tenchi",
    correct: "Masaki",
    divClass: ".tm"
},
{
    ques: "What is Suzuka's nickname on Outlaw Star?",
    ans: ["Midnight", "Twilight", "Moonlight", "Starlight"],
    name: "outlawstar",
    correct: "Twilight",
    divClass: ".os"
},
{
    ques: "Which of the following anime series was not combined to make Robotech in the USA?",
    ans: ["Genesis Climber Mospeada", "Southern Cross", "Macross", "MS Gundam"],
    name: "robotech",
    correct: "MS Gundam",
    divClass: ".rt"
},
{
    ques: "What was the name of Lelouch's alter ego in Code Geass?",
    ans: ["Zero", "Lelouch vi Britania", "Orange", "Suzaku"],
    name: "codegeass",
    correct: "Zero",
    divClass: ".cg"
},
{
    ques: "How many dragonballs must be collected to make a wish in the Dragon Ball series?",
    ans: ["4", "5", "6", "7"],
    name: "dragonballs",
    correct: "7",
    divClass: ".dbz"
},
{
    ques: "What was the code name of pilot of Dynames in Gundam 00",
    ans: ["Sure Fire", "Sure Shot", "Lock on Stratos", "Bullseye"],
    name: "gundam00",
    correct: "Lock on Stratos",
    divClass: ".gun"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz