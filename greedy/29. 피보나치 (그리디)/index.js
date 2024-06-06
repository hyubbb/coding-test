let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let data = input.slice(1).map(Number);
// 피보나치 수열을 만들어주는 함수
let pibo = [];

pibo[0] = 0;
pibo[1] = 1;

while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
}

for (let i = 0; i < n; i++) {
  let result = [];
  for (let j = pibo.length; j > 0; j--) {
    if (pibo[j] <= data[i]) {
      result.push(pibo[j]);
      data[i] -= pibo[j];
    }
  }
  console.log(result.sort((a, b) => a - b).join(" "));
}
