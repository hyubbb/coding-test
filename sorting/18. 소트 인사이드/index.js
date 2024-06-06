let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

console.log(
  input
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
