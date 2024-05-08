let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
let data = input.splice(1).map((el) => el.split(" ").map(Number));
data.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

let first = 0;
let second = 0;
let cnt = 0;
for (let i = 0; i < n; i++) {
  let arr = data[i];
  if (second <= arr[0]) {
    first = arr[0];
    second = arr[1];
    cnt++;
  }
}
console.log(cnt);
