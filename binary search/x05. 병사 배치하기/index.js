let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = input[0];
const data = input[1].split(" ").map(Number);

data.reverse();

console.log(data);
