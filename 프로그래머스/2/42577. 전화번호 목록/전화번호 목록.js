function solution(phone_book) {
  const hash = new Map();

  // 모든 번호를 해시에 저장
  for (const num of phone_book) {
    hash.set(num, true);
  }

  // 각 번호의 접두어를 하나씩 만들어 해시에 있는지 확인
  for (const num of phone_book) {
    for (let i = 1; i < num.length; i++) {
      const prefix = num.slice(0, i);
      if (hash.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}
