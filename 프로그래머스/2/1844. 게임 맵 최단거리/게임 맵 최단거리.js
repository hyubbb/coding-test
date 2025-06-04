function solution(maps) {
  const mapX = maps.length - 1;
  const mapY = maps[0].length - 1;
  const queue = [[0, 0, 1]]; // x, y, count

  // 우 하 좌 상 순서로 탐색, 위치가 상단에서 하단으로 향하기 때문에.
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length>0) {
    const [x, y, count] = queue.shift();

    if (x === mapX && y === mapY) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i];
      const posX = x + dx;
      const posY = y + dy;
      // 이중 하나라도 걸리면 다음행동을 하지 않고 다음방향으로 넘어간다.
      if (posX < 0 || posY < 0 || posX > mapX || posY > mapY) continue;
      // 0인 좌표는 갈수 없는 좌표이기때문에 다음행동을 하지 않고 다음방향로 넘어간다.
      if (maps[posX][posY] === 0) continue;
      // 방문한 좌표는 다시 방문하지 않기위해서 0 처리
      maps[posX][posY] = 0;
      queue.push([posX, posY, count + 1]);
    }
  }
  return -1;
}
