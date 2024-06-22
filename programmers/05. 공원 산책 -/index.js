function solution(park, routes) {
  const way = {
    N: [-1, 0],
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
  };
  const startIndex = park.findIndex((row) => row.includes("S"));
  const parkStart = [startIndex, park[startIndex].indexOf("S")];

  routes.forEach((route, idx) => {
    const [direction, steps] = route.split(" ");

    for (let i = 1; i <= steps; i++) {
      const move = way[direction].map((value, idx) => {
        const result = value * i + parkStart[idx];
        return result;
      });

      if (move[0] < 0 || move[0] >= park.length) return;
      if (move[1] < 0 || move[1] >= park[0].length) return;
      if (park[move[0]][move[1]] == "X") return;
    }
    parkStart[0] += way[direction][0] * steps;
    parkStart[1] += way[direction][1] * steps;
  });
  return parkStart;
}

// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]);
solution(["S11", "OXX", "OOO"], ["E 2", "S 2", "W 1"]);
// solution(["S11", "OXX", "OOO"], ["S 2"]);
// solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
// solution(["OOSOX", "OOOOO", "OOOOO"], ["E 1"]); // [0.3]
// 입력값 〉 ["OOSOX", "OOOOO", "OOOOO"], ["E 1"]
// 기댓값 〉 [0, 3]
