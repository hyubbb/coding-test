function solution(s) {
  let answer = [0, 0];

  while (s.length > 1) {
    const len = s.length;
    s = s.split("0").join("");
    answer[0]++;
    answer[1] += len - s.length;
    s = s.length.toString(2);
  }
  return answer;
}
solution("110010101001"); // [3,8]
