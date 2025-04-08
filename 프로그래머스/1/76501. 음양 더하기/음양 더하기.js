function solution(abosolute, signs) {
  return abosolute.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
}