let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const dataCnt = +input[0];
const data = input;
let cnt = 0;

for (let i = 1; i <= dataCnt; i++) {
  // 체크할 값이 있는지 확인하기 위한 변수
  let flag = 1;
  // 중복된 값이 있는지 확인하기 위한 변수
  let temp = {};
  for (let j = 0; j < data[i].length; j++) {
    // 다음값과 현재값이 다를때만 체크
    if (data[i][j] === data[i][j + 1]) continue;
    // 기존에 값이 있었다는 것은 중복된 값이 있다는 것
    if (temp[data[i][j]] == 1) {
      flag = 0;
      break;
    }
    // 현재의 값을 키값으로 판단함
    temp[data[i][j]] = 1;
  }
  if (flag) {
    cnt++;
  }
}
console.log(cnt);
