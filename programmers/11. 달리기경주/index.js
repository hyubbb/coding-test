function solution(players, callings) {
  const playersData = [...players];

  const playerMap = new Map();

  playersData.forEach((playerData, index) => {
    return playerMap.set(playerData, index);
  });

  // 불린 선수의 등수와 그 앞자리의 선수를 교체해줘야한다.
  callings.forEach((calling) => {
    const callingIndex = playerMap.get(calling);
    if (callingIndex > 0) {
      playerMap.set(playersData[callingIndex], callingIndex - 1);
      playerMap.set(playersData[callingIndex - 1], callingIndex);

      [playersData[callingIndex - 1], playersData[callingIndex]] = [
        playersData[callingIndex],
        playersData[callingIndex - 1],
      ];
    }
  });
}

// indexof는 시간복잡도가 O(n) 이므로, O(m*n)이 된다. m은callings, n은players의 길이
// hashmap을 사용하면, 배열의 각 요소과 ㅇ그 인덱스를 매칭하는 객체를 생성, 이렇게 되면 호출할때 O(1)이 된다.

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
// solution(["mumu", "soe", "poe", "kai", "mine"], ["kai"]);
