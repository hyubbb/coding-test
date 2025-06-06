let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, ...com] = input;
const graph = Array.from({ length: +N + 1 }, () => []);
const visited = Array.from({ length: +N + 1 }, () => false);

for (let i = 0; i < M; i++) {
  const [a, b] = com[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (v) => {
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

dfs(1);

console.log(visited.filter((v, i) => v == true && i > 0).length - 1);
