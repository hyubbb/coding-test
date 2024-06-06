let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

let [A, B] = input.split(" ").map(Number);
let cnt = 1;
while (B >= A) {
  if (A == B) break;
  if (B % 10 == 1) B = parseInt(B / 10);
  else if (B % 2 == 0) B = parseInt(B / 2);
  else break;
  cnt++;
}
if (A === B) {
  console.log(cnt);
} else {
  console.log(-1);
}

// let result = 1;
// let flag = false;
// while (B >= A) {
//   if (A == B) {
//     flag = true;
//     break;
//   }
//   if (B % 2 == 0) B = parseInt(B / 2);
//   else if (B % 10 == 1) B = parseInt(B / 10);
//   else break;
//   result++;
// }

// if (flag) console.log(result);
// else console.log(-1);
