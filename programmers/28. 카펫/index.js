function solution(brown, yellow) {
  let sum = brown + yellow;
  let first = Math.floor(Math.sqrt(sum));
  let second = sum / first;

  console.log(Math.sqrt(24));
  console.log([Math.max(first, second), Math.min(first, second)]);
  return [Math.max(first, second), Math.min(first, second)];
}

solution(18, 6);
