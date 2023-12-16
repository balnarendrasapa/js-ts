
// string
let fullName: string = 'Bob Smith';
fullName = 'John Doe';
console.log(`Hello, ${fullName}`);


// strict equality
let a: string = "abc"

if (a === "abc") {
    console.log("a is abc")
}

// reading from stdin
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer: string) => {
  console.log(`You entered: ${answer}`);
  rl.close();
});