let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;

data.reduce((acc, cur, idx) => {
  acc += cur;
  result += acc;
  return acc;
}, 0);

console.log(result);
