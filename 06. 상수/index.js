let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let [a, b] = input;
let first = [...a].reverse().join("");
let second = [...b].reverse().join("");
console.log(Math.max(first, second));
