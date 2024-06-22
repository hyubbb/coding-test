function solution(keymap, targets) {
  const result = [];
  targets.forEach((target, idx) => {
    result[idx] = 0;
    for (let i = 0; i < target.length; i++) {
      const arr = keymap.map((el) => el.indexOf(target[i]));
      const filteredArr = arr.filter((value) => value > -1);
      if (filteredArr.length > 0) {
        result[idx] += Math.min(...filteredArr) + 1;
      } else {
        result[idx] = -1;
        break;
      }
    }
  });
  console.log(result);
  return result;
}

// solution(["AGZ", "BSSS"], ["ASA", "BGZ"]); // 4,6
solution(["AA"], ["B"]); // -1
// solution(["ABCE"], ["ABDE"]); // -1
