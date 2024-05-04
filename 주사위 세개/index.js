let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [a, b, c] = input[0].split(" ").map(Number);

if (a === b && b === c) {
  console.log(10000 + 1000 * a);
} else if (a === b || a === c || b === c) {
  console.log(1000 + 100 * (a === b ? a : b));
} else {
  console.log(Math.max(a, b, c) * 100);
}
