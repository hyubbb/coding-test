// 이 배열이 몇번쨰인가 크기를 비교하는것도 있지만,
// 순서별로 나열하면 그 키값이 즉 그 순서가 된다.
// 기준값보다 작은 값 = 기준값의 순서
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let data = input[1].split(" ").map(Number);
let removeDup = [...new Set(data)];
let sorted = removeDup.sort((a, b) => a - b);
let dataMap = new Map();
for (let i = 0; i < sorted.length; i++) {
  dataMap.set(sorted[i], i);
}

let result = data.map((el) => dataMap.get(el)).join(" ");
console.log(result);
