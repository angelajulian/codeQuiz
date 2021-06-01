var questionTitleEl = document.querySelector("#question-title");
var questionTextEl = document.querySelector("#question-text");
var answerListEl = document.querySelector("#answer-list");
var answerButton = document.querySelector(".answer-button");
var answersCorrect = 0;

// store a list of questions
//questions include:
// question title
// question text
// answers
// answer key

var questions = [
  {
    text: "How are Java and Javascript related?",
    answers: {
      "Java is named after Javascript": false,
      "They are the same thing": false,
      "Javascript was named after Java": true,
      "Javascript is build off of Java": false,
    },
  },
  {
    text: "What is true about console.log?",
    answers: {
      "anything printed using console.log shows up in the developer console": false,
      "console.log is useful to developers to display what variables are set as at different points in an application": false,
      "Console.log isn't visible on the page": false,
      "all of the above": true,
    },
  },
  {
    text: "Javascript is an object oriented programming language",
    answers: { True: true, False: false },
  },
  {
    text: "Javascript is an obligatory part of web design",
    answers: { "True!": false, "False!": true },
  },
  {
    text: "Which is not a native Javascript data type?",
    answers: {
      "a Boolean": false,
      "a String": false,
      "a Dictionary": true,
      "a Float": false,
    },
  },
  {
    text: "Strings must be enclosed in ____",
    answers: {
      "Double or single quotes": true,
      "Square Brackets": false,
      "Double quotes, only": false,
      "Single quotes, only": false,
    },
  },
  {
    text: "4.5 is an example of",
    answers: {
      "a char": false,
      "a float": true,
      "an int": false,
      "an array": false,
    },
  },
  {
    text: "When in a function, 'return x' does what?",
    answers: {
      "breaks out of a function": false,
      "passes 'x' outside the function": false,
      "both of the above": true,
      "prints 'x' to the console": false,
    },
  },
  {
    text: "How would you change the title of the following object? \n var customer = { title: 'miss', name: 'E. Elliot'}",
    answers: {
      "customer = 'Mrs', 'E. Eliot'": false,
      "customer.name = 'Mr'": true,
      "name = 'Mz'": false,
    },
  },
  {
    text: "Bonus question: Who wrote this quiz?",
    answers: {
      " Julianne ": false,
      " Julie ": false,
      " Adrian ": false,
      " Angela ": true,
    },
  },
];

var renderQuestionEl = function (questionObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "answer-button";
};

// when question is loaded, set timer for 30 seconds
// run timer
// load question title, question text, and answer list

// when a question is answered, evaluate if it is correct
// & disable buttons
// if the answer is correct, add 1 to answersCorrect
// & show "correct!" under the answers
// if the answer is false, show "wrong" under the answers
//optional: highlight correct answer
// if time runs out, disable buttons
// optional: highlight correct answer
// after 3 seconds of showing the correct answer, load next question

// after each question is answered (or timer runs out)
// ask for initials with in-window form
// add user score to scores
// load all scores
// show leaderboard by point total
