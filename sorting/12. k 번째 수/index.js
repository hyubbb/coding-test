let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);
console.log(data.sort((a, b) => a - b)[K - 1]);
