let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 첫줄을 나누기

const [nvm, ...edges] = input;

const [N, M, V] = nvm.split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

edges.forEach((edge) => {
  const [a, b] = edge.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visitedDfs = Array(N + 1).fill(false);
const visitedBfs = Array(N + 1).fill(false);
const resultDfs = [];
const resultBfs = [];

const dfs = (v) => {
  visitedDfs[v] = true;
  resultDfs.push(v);

  for (const node of graph[v]) {
    if (!visitedDfs[node]) dfs(node);
  }
};
console.log(graph);

const bfs = (v) => {
  visitedBfs[v] = true;
  const queue = [v];

  while (queue.length > 0) {
    const emp = queue.shift();
    resultBfs.push(emp);

    for (const node of graph[emp]) {
      if (!visitedBfs[node]) {
        queue.push(node);
        visitedBfs[node] = true;
      }
    }
  }
};

dfs(V);
bfs(V);
