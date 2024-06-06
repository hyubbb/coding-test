// 이 문제의 핵심은, 한칸 아래의 풍선만 터트릴수있다 것이고,
// 바로 다음 풍선이 아니어도 높이에따라 터트 릴 수 있다는 것이다.
// 객체로 만들어서 타겟을 가르켜야 현다.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const data = input[1].split(" ").map(Number);
let cnt = 0;
// 화살타겟 체크를 위한 배열 설정.
let arrows = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i++) {
  // 화살타겟이 있으면 현재 화삹타겟 초기화, 그 다음 화살타겟을 하나 늘린다.
  if (arrows[data[i]]) {
    arrows[data[i]]--;
    arrows[data[i] - 1]++;
  } else {
    // 초기화살 타겟이 없으면, 다음 화살타겟 하나 늘린다. 그리고 화살소비 증가
    cnt++;
    arrows[data[i] - 1]++;
  }
}

console.log(cnt);
