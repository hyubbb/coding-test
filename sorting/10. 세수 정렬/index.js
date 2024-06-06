let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join(" ")
);
