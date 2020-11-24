score = 0;
var readlineSync = require('readline-sync');

var username = readlineSync.question("What is your name? ");

console.log("Hello " + username);

console.log("This Quiz is About How well you know Marvel.")
var def = readlineSync.question("So Are You Ready? ")
if (def.toLowerCase() == "yes") {
  console.log("Let the Game Begin")
}
else {
  console.log("Take your time");
}

function quiz(question, answer) {
  var ranswer = readlineSync.question(question);

  if (ranswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer is ", answer)
    score += 1;
    console.log("Score is ", score)

  }
  else {
    console.log("Right Answer is ", answer)
    console.log("Score is ", score)
  }
}

quiz("What is Iron Man's Reel Name? ", "tony stark");
quiz("Did Iron Man killed all the avengers? ", "no");
quiz("Iron Man Dies in which Marvel Movie? ", "Avengers End Game");
console.log("Final Score is ", score)
if (score == 3) {
  console.log("You are Quite a Marvel Fan, Well I am Too You can proceeded to next level.Type yes to continue or no to exit")
  var nxtlvl = readlineSync.question();
  if (nxtlvl.toLowerCase() === "yes") {
    console.log("You are now in LvL 2")
    quiz("What is Chris Evans Name in Marvel Universe? ", "Steve Rogers")
    quiz("Will Black Window die in Infinity war? ", "no")
    quiz("Thanos was first seen in which Marvel Movie? ", "Guardians of Galaxy")
    if (score == 6) {
      console.log("Quiz is Done.Your a crazy Marvel Fan.")
    }
    else {
      console.log("You Many not have answered all questions correctly.Better luck next time")
    }
  }
  if (nxtlvl === "no") {
    console.log("Its sad to see you go.You can comeback anytime.Thank you")
  }
}
else {
  console.log("Better Luck Next Time!")
}