let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("Please enter Your name -- ");
console.log(kuler(`Hello ${userName} welcome to the Quiz`, "#f99f1e"));

const database = {
  data: [
    {
      question: `let a = {}, b = {} , console.log(a == b) , console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(target, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Sahil",
      score: 3,
    },
    {
      name: "AJ",
      score: 2,
    },
    {
      name: "Vivek",
      score: 1,
    },
  ],
};

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("\nCorrect Answer", "#398564"));
    score++;
  } else {
    console.log(kuler("\nWrong answer", "#ee4035"));
    console.log(kuler(`Correct answer is ${correctAnswer}`, "#0392cf"));
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScores = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log("\nCheck Your Score in the Leaderboard\n");
  for (let leader of sortedScores) {
    console.log(`${leader.name} -- Score == ${leader.score}`);
  }
}

function showQuestionsAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ ${i + 1}) ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} = ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("\nSelect your option -- ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

showQuestionsAndOptions(database);
showHighScorer(leaderBoard);
