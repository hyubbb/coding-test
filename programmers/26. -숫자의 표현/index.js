function solution(n) {
  var answer = 0;

  // n나누기 2 그리고 내림한다음
  // 그 숫자 -1 해서 값들을 더하기함, 근데 그값이 n의 값을 넘으면 내림한 값을 -1해서 다시 더하기 함

  let first = Math.ceil(n / 2);
  let temp = first;
  while (true) {
    answer += temp;

    if (answer > n) {
    }

    if (answer == n) {
      temp = first--;
    }

    temp--;

    if (temp === 1) break;
  }

  return answer;
}

solution(15);
