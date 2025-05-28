const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [N, K] = input[0].split(" ").map(Number);
  const data = input.slice(1).map((row) => row.split(" ").map(Number));
  const memo = Array.from({ length: N + 1 }, (_) =>
    Array.from({ length: K + 1 }, (_) => 0),
  );

  for (let i = 1; i <= N; i++) {
    const [W, V] = data[i - 1];
    for (let j = 1; j <= K; j++) {
      // j : 가능한 최대 무게
      if (j - W >= 0) {
        // j - W : 여유분 (가능한 최대 무게 - 현재 아이템 무게)
        // 새 아이템의 무게를 넣는 경우와 안 넣는 경우 중 더 큰 가치를 따짐
        memo[i][j] = Math.max(memo[i - 1][j], memo[i - 1][j - W] + V);
      } else {
        memo[i][j] = memo[i - 1][j];
      }
    }
  }
  console.log(memo[N][K]);
});