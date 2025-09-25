const readline = require("readline");

// create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask first number
rl.question("Enter the first number: ", (num1) => {
  // ask second number
  rl.question("Enter the second number: ", (num2) => {
    // convert strings to numbers and add
    let sum = parseFloat(num1) + parseFloat(num2);
    console.log(`The sum is: ${sum}`);

    rl.close(); // close input
  });
});