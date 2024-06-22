function solution(players, callings) {
  const copy = [...players];

  callings.forEach((calling) => {
    let calledPlayerNum = copy.indexOf(calling);
    // indexof가 값을 하나씩 비교하는데 100만개가 되어버리면 부하가 엄청걸려서 실패함
    // 그래서 hashmap을 사용해주어야 한다.

    // temp.push(copy[calledPlayerNum - 1]);
    // copy[calledPlayerNum - 1] = copy[calledPlayerNum];
    // copy[calledPlayerNum] = temp[idx];

    // 이럴필요가 없다. 그냥 구조분해할당을 사용하면 된다.

    [copy[calledPlayerNum - 1], copy[calledPlayerNum]] = [
      copy[calledPlayerNum],
      copy[calledPlayerNum - 1],
    ];
  });
  return copy;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai"]);
