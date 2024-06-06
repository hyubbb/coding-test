let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const data = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...data);
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let x of data) {
    const a = parseInt(x / mid);
    total += a;
  }
  console.log(total, mid);
  if (total < N) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }
}

console.log(result);
