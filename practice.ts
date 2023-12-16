
// string interpolation
let fullName: string = 'Bob Smith';
fullName = 'John Doe';
console.log(`Hello, ${fullName}`);


// strict equality
let a: string = "abc"

if (a === "abc") {
    console.log("a is abc")
}

// reading from stdin
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter a number: ', (answer: string) => {
//   console.log(`You entered: ${answer}`);
//   rl.close();
// });

const som: any = "abc"

for (let i in som) {
    console.log(i)
}
for (let i of som) {
    console.log(i)
}

console.log()

let arrNums: number[] = [11, 22, 33, 44, 55]

for (let i of arrNums) {
    console.log(i)
}
console.log(arrNums.map((x) => x * 2))