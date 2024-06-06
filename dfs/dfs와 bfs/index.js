let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 첫줄을 나누기

const [nvm, ...edges] = input;
const [N, M, V] = nvm.split(" ").map(Number);
// console.log(N, M, V);
const graph = Array.from({ length: N + 1 }, () => []);

edges.forEach((edge) => {
  const [u, v] = edge.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
});

// graph : [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ]
// foreach를 통해서 접해있는 값을 추려낼수 있다.

// graph 값 정렬 작은 값부터 재귀하기 위해서
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// 방문 여부 확인
const visitedDfs = Array(N + 1).fill(false);
const visitedBfs = Array(N + 1).fill(false);
const dfsResult = [];
const bfsResult = [];
// console.log(graph);

const dfs = (node) => {
  visitedDfs[node] = true;
  dfsResult.push(node);

  // 인접노드를 순회하는 반복문
  for (const neighbor of graph[node]) {
    // console.log(node, graph[node], neighbor);
    // [2,3,4] 를 돌면서 재귀함수,
    // 처음엔 다 false니까 2의 값으로 함수 실행
    // 2가 들어오면 graph[2]의 값 즉 2의 인접한 값 [1,4]를 체크해하는데
    // 1은 이전의 값으로 true니까 4만 실행,
    // console.log(neighbor, visitedDfs[neighbor]);
    if (!visitedDfs[neighbor]) {
      dfs(neighbor);
    }
  }
};

const bfs = (node) => {
  const queue = [node];
  visitedBfs[node] = true;

  while (queue.length > 0) {
    // 큐 상태를 출력하여 디버깅할 수 있습니다.
    // console.log("queue", queue);

    // 큐의 첫 번째 값을 결과 배열에 저장합니다. 선입선출을 위해 shift()를 사용합니다.
    // BFS이기 때문에, 깊이를 계산해야 하므로 큐에 값을 넣어놓고 그 순서대로 인접 노드를 처리합니다.
    const emp = queue.shift();
    bfsResult.push(emp);

    // 큐에서 꺼낸 값을 기준으로 인접 노드를 탐색합니다.
    for (const neighbor of graph[emp]) {
      // 아직 방문하지 않은 인접 노드를 찾습니다.
      if (!visitedBfs[neighbor]) {
        // 인접 노드를 큐에 추가하고 방문 처리합니다.
        // 방문 처리된 값들은 큐에 순차적으로 저장되어 처리됩니다.
        queue.push(neighbor);
        visitedBfs[neighbor] = true;
      }
    }
  }

  // dfsResult.push(node);
  // for (const neighbor of graph[node]) {
  //   visited[node] = true;
  //   dfsResult.push(neighbor);
  // }
  // if (!visited[neighbor]) {
  //   dfs(neighbor);
  // }
};

dfs(V);
console.log(dfsResult);
bfs(V);
console.log(bfsResult);
