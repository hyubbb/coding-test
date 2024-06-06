let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const myCard = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = parseInt(input[2]);
const findCard = input[3].split(" ").map(Number);

const lowerBound = (arr, find, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    // 오른쪽에서 왼쪽으로 값을 훑어서 중복c된값중에 가장 첫번째의 값을 찾아야하기떄문에 start는 mid+1
    if (arr[mid] >= find) end = mid;
    else start = mid + 1;
  }
  return end;
};

const upperBound = (arr, find, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > find) end = mid;
    else start = mid + 1;
  }
  return end;
};

const findIndex = (i) => {
  // 하한선과 상한선의 값 = index의 위치 를 비교하면
  // 동일한값이 몇개인지 알 수 있으니까, 그값으로 몇개인지 유추가능
  const a = lowerBound(myCard, findCard[i], 0, n);
  const b = upperBound(myCard, findCard[i], 0, n);
  return b - a;
};

let result = [];

for (let i = 0; i < m; i++) {
  result.push(findIndex(i));
}

console.log(result.join(" "));
