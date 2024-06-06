let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const m = parseInt(input[2]);

let start = 1;
let end = Math.max(...arr);
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let x of arr) {
    total += Math.min(mid, x);
  }

  console.log(mid);

  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
