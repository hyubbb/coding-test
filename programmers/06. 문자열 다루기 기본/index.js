function solution(n) {
  const reg = RegExp("^[0-9]*$").test(n);
  const result = n.length === 4 || (n.length === 6 && reg);
  return result;
}
solution("a1234"); // false
solution("0123"); // true
solution("3e13");
solution("Ada");
