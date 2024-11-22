function solution(new_id) {
  let id = new_id.toLowerCase();

  // 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  id = id.replace(/[^a-z0-9\-_.]/g, "");

  // 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환
  id = id.replace(/\.{2,}/g, ".");

  // 마침표가 처음이나 끝에 위치한다면 제거
  id = id.replace(/^\.|\.$/g, "");

  // 빈 문자열이라면 "a"를 대입
  if (id === "") {
    id = "a";
  }

  // 길이가 16자 이상이면 첫 15개 문자를 제외한 나머지 문자 제거
  if (id.length >= 16) {
    id = id.slice(0, 15);
  }

  // 길이가 2자 이하라면 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
  if (id.length <= 2) {
    while (id.length < 3) {
      id += id[id.length - 1];
    }
  }
  // 마침표가 처음이나 끝에 위치한다면 제거
  id = id.replace(/^\.|\.$/g, "");

  console.log(id);
  return id;
}

const a = () => {
  const a = [3, 0, 6, 1, 5];
  // a 의 합계
  const sum = a.reduce((acc, cur) => acc + cur, 0);
  answer = sum / a.length;
};

// const a = "abcdefghijklmn.p";
// const a = "123_.def";
// const a = "=.=";
// const a = "abcdefghijklmn.p";
solution(a);
