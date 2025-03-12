function solution(players, callings) {
  const playersData = [...players];

  const playerMap = new Map();

  playersData.forEach((playerData, index) => {
    return playerMap.set(playerData, index);
  });

  // 불린 선수의 등수와 그 앞자리의 선수를 교체해줘야한다.
  callings.forEach((calling) => {
    const callingIndex = playerMap.get(calling);
    if (callingIndex&&callingIndex > 0) {
      playerMap.set(playersData[callingIndex], callingIndex - 1);
      playerMap.set(playersData[callingIndex - 1], callingIndex);

      [playersData[callingIndex - 1], playersData[callingIndex]] = [
        playersData[callingIndex],
        playersData[callingIndex - 1],
      ];
    }
  });
    return playersData
}