// 이거 hash 로 푸는문제,
// 해시로 풀면 시간복잡도가 O(1)이라서 효율성이 높아진다.
// hash에 반복문으로 phonebook을 set 해주고.
// forof 로 phonebook에서 하나씩 찍을때,

function solution(phone_book) {
  let result = true;

  phone_book.sort();
  const phoneSet = new Map();

  phone_book.forEach((phone) => {
    phoneSet.set(phone, true);
  });
  // 각 전화번호의 접두어를 해시맵에서 확인
  for (let phone of phone_book) {
    for (let i = 1; i <= phone.length; i++) {
      const prefix = phone.slice(0, i);
      console.log(phone, prefix);
      if (phoneSet.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
