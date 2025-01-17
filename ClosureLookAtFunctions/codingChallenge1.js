// Coding Challenge #1

//Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.

// Your tasks:

// ✅ 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:

// 1.1.
// ✅ Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2.
// ✅ Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)

// ✅ 2. Call this method whenever the user clicks the "Answer poll" button.

// ✅ 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".

// ✅ 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  // This generates [0, 0, 0, 0].
  answer: new Array(4).fill(0),
  registerNewAnswer() {
    let input = prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );
    const inputNum = Number(input);

    if (!isNaN(inputNum) && inputNum >= 0 && inputNum < this.answer.length) {
      this.answer[inputNum]++;
    } else {
      alert("Invalid input. Please enter a valid number.");
    }

    this.displayResults();
  },

  displayResults() {
    console.log("Poll results:", this.answer);
  },
};

const button = document.querySelector(".poll");
const bindPoll = poll.registerNewAnswer.bind(poll);
button.addEventListener("click", bindPoll);
