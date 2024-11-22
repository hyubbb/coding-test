function solution(s) {
  let num = +s;
  let new_num = 0;
  const count = num.toString(2).split(0).join("").length;

  while (true) {
    new_num = ++num;
    const new_count = new_num.toString(2).split(0).join("").length;
    if (count == new_count) break;
  }
  return new_num;
}
solution("78"); // [3,8]
