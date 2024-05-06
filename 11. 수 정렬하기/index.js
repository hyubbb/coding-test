let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// const result = [...input.splice(1)]
//   .map(Number)
//   .sort((a, b) => a - b)
//   .join("\n");
// console.log(result);

const data = [...input.splice(1)].map(Number);
sortFunc(data);
console.log(data.join("\n"));

function sortFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
}
