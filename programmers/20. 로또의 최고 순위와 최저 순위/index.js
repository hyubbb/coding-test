function solution(lottos, win_nums) {
  var answer = [];
  // let cnt_zero = lottos.filter((x) => x == 0).length;
  let cnt_zero = 0;
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let min_rank = win_nums.filter((x) => lottos.includes(x)).length;
  let max_rank = min_rank + cnt_zero;
  console.log(max_rank, min_rank);
  answer = [rank[max_rank], rank[min_rank]];
  console.log(answer);
  return answer;
}

// solution([0, 0, 0, 15, 40, 20], [38, 19, 20, 40, 15, 25]);
// solution([45, 4, 35, 20, 3, 9], [45, 4, 35, 20, 3, 9]);
solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
