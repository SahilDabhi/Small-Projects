let readlinesync = require("readline-sync");

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

function showQuestionsAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`Q ${i + 1}) ${database.data[i].question}`);
    for (let key in database.data[i].options) {
      console.log(`${key} = ${database.data[i].options[key]}`);
    }
    let userAnswer = readlinesync.question("Select your option - \n");
  }
}

showQuestionsAndOptions();
