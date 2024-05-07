let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

console.log(
  input
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
