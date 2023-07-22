//declarations
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//start the game by pressing keyboard key
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//check which button is clicked and push onto userClickedPattern and
//play relevant sound with animation and check answer
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

//methhod to check answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
      }, 200);
      
    startOver();
  }
}

//method to generate sequence i.e random buttons to be pressed in order to play
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // var ids = "#"+randomChosenColour; //these 2lines can be merged as follows
  // $(ids).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //OR
  //animatePress(randomChosenColour); 
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
}





























//     switch(name){
//         case "green" :
//             var audio = new Audio("sounds/"+name+".mp3");
//             audio.play();
//             break;
//         case "red" :
//             var audio = new Audio("sounds/"+name+".mp3");
//             audio.play();
//             break;
//         case "blue" :
//             var audio = new Audio("sounds/"+name+".mp3");
//             audio.play();
//             break;
//         case "yellow" :
//             var audio = new Audio("sounds/"+name+".mp3");
//             audio.play();
//             break;
//     }
//}

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   //1. Use jQuery to select the button with the same id as the randomChosenColour
//   //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }
