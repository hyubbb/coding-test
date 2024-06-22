function solution(keymap, targets) {
  const answer = targets.map((target) => {
    let result = 0;
    for (let i = 0; i < target.length; i++) {
      const arr = keymap
        .map((el) => el.indexOf(target[i]) + 1)
        .filter((value) => value > 0);

      if (arr.length === 0) return -1;
      result += Math.min(...arr);
    }
    return result;
  });
  return answer;
}

solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]); // 9,4
// solution(["AGZ", "BSSS"], ["ASA", "BGZ"]); // 4,6
// solution(["AA"], ["B"]); // -1
// solution(["ABCE"], ["ABDE"]); // -1
