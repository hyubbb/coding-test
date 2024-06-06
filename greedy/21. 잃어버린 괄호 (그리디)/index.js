let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const data = input.split("-");

// for (let i = 0; i < data.length; i++) {
//   let sum = 0;
//   let num = data[i].split("+");
//   for (let j = 0; j < num.length; j++) {
//     sum += parseInt(num[j]);
//   }
//   data[i] = sum;
// }
// const result = data.reduce((acc, cur) => acc - cur);
// console.log(result);

let result = 0;
for (let i = 0; i < data.length; i++) {
  let num = data[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  if (i == 0) result += num;
  else result -= num;
}
console.log(result);
