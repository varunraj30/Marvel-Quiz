score = 0;
var readlineSync = require('readline-sync');

var username = readlineSync.question("What is your name? ");

console.log("Hello " + username);

console.log("This Quiz is About How well you know Marvel.")
var def = readlineSync.question("So Are You Ready? ")
if (def.toLowerCase() == "yes") {
  console.log("Let the Game Begin")
  function quiz(question, answer) {
  var ranswer = readlineSync.question(question);

  if (ranswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer! ")
    score += 1;
    console.log("Score is ", score)

  }
  else {
    console.log("Right Answer is ", answer)
    console.log("Score is ", score)
  }
}

quiz("What is Iron Man's Reel Name? ", "tony stark");
quiz("Who does the Mad Titan sacrifice to acquire the Soul Stone? ", "Gamora");
quiz("Iron Man Dies in which Marvel Movie? ", "Avengers Endgame");
quiz("What is the name of Thor’s hammer? ","Mjolnir");
quiz("Who is killed by Loki in the Avengers? ","Agent Coulson");
console.log("Final Score is ", score)
if (score == 5) {
  console.log("You are Quite a Marvel Fan, Well I am Too You can proceeded to next level.Type yes to continue or no to exit")
  var nxtlvl = readlineSync.question();
  if (nxtlvl.toLowerCase() === "yes") {
    console.log("You are now in LvL 2")
    quiz("What is Chris Evans Name in Marvel Universe? ", "Steve Rogers")
    quiz("Will Black Window die in Infinity war? ", "no")
    quiz("Thanos was first seen in which Marvel Movie? ", "Guardians of Galaxy")
    quiz("What is Captain America’s shield made of? ","Vibranium");
    quiz("Which of the infinity stones is hidden on Vormir?","Soul Stone");
    if (score == 10) {
      console.log("Quiz is Done.Your a crazy Marvel Fan.")
    }
    if(score<=5) {
      console.log("Your score is below 5.Better luck next time")
    }
    else {
      console.log("Score is",score)
      console.log("Better luck next time")
    }
  }
  if (nxtlvl === "no") {
    console.log("Its sad to see you go.You can comeback anytime.Thank you")
  }
}
else {
  console.log("Better Luck Next Time!")
}
}
else {
  console.log("Take your time");
}

