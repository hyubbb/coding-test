let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

// let a = 0;
// for (let i = a; i <= input; i++) {
//   if (parseInt(i * (i + 1)) / 2 > input) {
//     a = i - 1;
//     break;
//   }
// }

let i = 0;
while (parseInt(i * (i + 1)) / 2 <= input) {
  i++;
}

console.log(i - 1);
