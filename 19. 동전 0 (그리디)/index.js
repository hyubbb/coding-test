let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
const data = input.splice(1);

let result = 0;
for (let i = N - 1; i >= 0; i--) {
  result += parseInt(K / data[i]);
  K %= data[i];
}

console.log(result);
