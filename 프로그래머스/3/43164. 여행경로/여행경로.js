function solution(tickets) {
  const ticketsData = [...tickets.sort()];
  const visitedDfs = Array(tickets.length + 1).fill(false);
  const resultDfs = [];
  const dfs = (start) => {
    if (resultDfs.length == 0) {
      resultDfs.push(start);
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = ticketsData[i];
      if (visitedDfs[i]) continue;
      if (from === start && !visitedDfs[i]) {
        resultDfs.push(to);
        visitedDfs[i] = true;
        dfs(to);
        // dfs가 끝나고 다시 돌아올때는 모든 경로를 다 돌았거나, 다음경로가 없을때이다.
        // resultDfs의 길이가 tickets.length + 1이 되면 모든 경로를 돈것이니 return 해준다.
        // 그게 아닐시에는 다음 경로가 없다는거니까 방금 행동에 대한것을 취소 해준다라는 개념으로
        // pop을 해주고 visited를 false로 바꿔준다.
        if (resultDfs.length === tickets.length + 1) return;
        resultDfs.pop();
        visitedDfs[i] = false;
      }
    }
  };
  dfs("ICN");
  return resultDfs;
}