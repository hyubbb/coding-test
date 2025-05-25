let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let sum = 0;

for (let i = 0; i < data.length; i++) {
  sum += data[i];
  result += sum;
}

console.log(result);

