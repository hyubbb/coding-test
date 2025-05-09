function solution(phone_book) {
  // 전화번호를 사전순으로 정렬
  phone_book.sort();

  // 인접한 두 전화번호만 비교하면 됨
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}
