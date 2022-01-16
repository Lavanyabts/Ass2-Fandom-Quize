var readlinesync = require("readline-sync");
var score = 0;

var highScores = [
  {
    name: "lavanya",
    score: 6,
  },
  {
    name: "anitha",
    score: 3,
  },
  {
    name: "latha",
    score: 5,
      },
      {
        name: "gaayu",
        score: 4,
      }
]
var questions = [{
  question: "expantion of ARMY? ",
  answer: "Adorable Represent of MC youth",
},
{
  question: "the last memeber to join BTS? ",
answer: "jimin",
}, 
{
  question: "BTS debute date? ",
  answer: "june 12 2013",
},
 {
  question: "BTS expantion? ",
  answer: "Bangtan sonyanton",
}, 
{ question: "kim Taehyungs stage name? ",
  answer: "v",
}, {
  question: "BTS first song name? ",
  answer: "bulletproof",
}];
function welcome() {
  var userName = readlinesync.question("what's your Name? ");
  console.log("welcome "+ userName + " to DO YOU KNOW BTS?");
  }
  function play(question, answer) {
    var userAnswer = readlinesync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log("right!");
      score = score + 1;
    } else {
      console.log("wrong");
    } 
    console.log("current score: ", score);
    console.log("--------")
  }

  function game() {
    for (var i=0; i<questions.length; i++)
    {
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer)
    }
  }
 function showScore() {
    console.log("YAY! you SCORED: ", score);
    console.log("check out the high scores, if you should be there ping me and i'll update it");
    highScores.map(score => console.log(score.name, " : " , score.score))
  }

  welcome();
  game();
  showScore();