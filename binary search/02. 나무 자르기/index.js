let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [n, target] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);
let start = 1;
let end = Math.max(...data);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  // mid값보다 큰 나무길이를 잘라서 targetdㅢ 값과 비교,
  for (let x of data) {
    if (x > mid) {
      total += x - mid;
    }
  }
  if (total >= target) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
