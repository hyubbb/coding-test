// 첫번째 마을에서는 무조건 기름을 넣어야한다.
// 마을들의 기름값을 비교해서 더 저렴한 마을에서 기름을 다 넣으면된다.
// 비싸면 다음마을거리만큼만 기름을 넣고, 다음마을에서 또 현재 마을이 다음 마을들보다 기름값이 비싼지 확인하고
// 비싸면 거리만큼만 넣고, 가장저렴하면 앞으로의 거리만큼 다 넣는다.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = Number(input[0]);
let distance = input[1].split(" ").map(Number);
let price = input[2]
  .split(" ")
  .slice(0, n - 1)
  .map(Number);

let budget = BigInt(0);
let minCost = price[0];

for (let i = 0; i < n; i++) {
  minCost = price[i] = Math.min(minCost, price[i]);
}
for (let i = 0; i < n - 1; i++) {
  budget += BigInt(price[i] * distance[i]);
}

console.log(String(budget));
