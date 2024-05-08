// A의 등수가 낮다면, B의 등수는 나보다 A등수가 높은사람보다 높아야한다.
// A의 등수 기준으로 나열한뒤에, B의 등수를 반복문으로 앞의 값과 비교하여
// B의 값이 낮으면 채용이 되면 되기때문에 카운트 해준다.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let line = 1;
for (let i = 0; i < input[0]; i++) {
  let n = +input[line];
  let arr = [];
  for (let j = 1 + line; j <= line + n; j++) {
    arr.push(input[j].split(" ").map(Number));
  }

  arr.sort((a, b) => a[0] - b[0]);
  let cnt = 0;
  let rank = 100001;
  for (const [a, b] of arr) {
    if (b < rank) {
      rank = b;
      cnt++;
    }
  }
  console.log(cnt);
  line += n + 1;
}
