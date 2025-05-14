function solution(prices) {
  const answer = [];

  // 이중반복문보다 크거나 같은지 확인하면서 count를 해야한다.

  for (let i = 0; i < prices.length; i++) {
    let time = 0;
    for (let j = i + 1; j < prices.length; j++) {
      time++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(time);
  }
  return answer;
}
