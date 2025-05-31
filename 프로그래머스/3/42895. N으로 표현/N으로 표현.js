function solution(N, number) {
  // 각 사용 횟수(1~8)에 따른 가능한 숫자 조합을 저장하는 배열
  const dp = Array.from({ length: 9 }, () => new Set());

  // N을 i번 반복해서 만든 숫자 (예: 5, 55, 555, ...)
  for (let i = 1; i <= 8; i++) {
    const repeated = Number(String(N).repeat(i));
    dp[i].add(repeated); // 예: dp[3]에는 555가 들어감

    // i를 두 부분으로 쪼개서 dp[a]와 dp[i-a] 조합
    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          // 사칙연산 조합
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          if (b !== 0) dp[i].add(Math.floor(a / b)); // 나눗셈은 정수만 (소수 버림)
        }
      }
    }

    // 목표 숫자 찾았으면 현재 사용 횟수 반환
    if (dp[i].has(number)) return i;
  }

  // 8번 이하로 만들 수 없는 경우
  return -1;
}
