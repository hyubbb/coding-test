function solution(players, callings) {
  const playersData = [...players];
  const playerIndexMap = new Map(
    playersData.map((player, index) => [player, index])
  );

  callings.forEach((calling) => {
    const calledPlayerNum = playerIndexMap.get(calling);
    if (calledPlayerNum && calledPlayerNum > 0) {
      const prevPlayer = playersData[calledPlayerNum - 1];
      // 선수의 위치 교환
      [playersData[calledPlayerNum - 1], playersData[calledPlayerNum]] = [
        playersData[calledPlayerNum],
        playersData[calledPlayerNum - 1],
      ];
      // 위치 교환 후 Map 업데이트
      playerIndexMap.set(calling, calledPlayerNum - 1);
      playerIndexMap.set(playersData[calledPlayerNum - 1], calledPlayerNum);
    }
  });

  return playersData;
}

// indexof는 시간복잡도가 O(n) 이므로, O(m*n)이 된다. m은callings, n은players의 길이
// hashmap을 사용하면, 배열의 각 요소과 ㅇ그 인덱스를 매칭하는 객체를 생성, 이렇게 되면 호출할때 O(1)이 된다.

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// solution(["mumu", "soe", "poe", "kai", "mine"], ["kai"]);
