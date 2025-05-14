function solution(prices) {
  // 결과를 저장할 배열을 prices와 동일한 길이로 초기화, 기본값은 0
  const answer = new Array(prices.length).fill(0);

  // 인덱스를 저장할 스택 (가격이 떨어지지 않은 시점을 추적)
  const stack = [];

  // prices 배열을 순차적으로 순회 (시간의 흐름)
  for (let i = 0; i < prices.length; i++) {
    // 현재 가격이 스택의 top 인덱스의 가격보다 낮다면
    // 가격이 떨어졌음을 의미하므로, 스택에서 처리할 수 있는 만큼 처리

    // stack에 넣어둔 가격이 떨어지지않은 index의 값을 이용해서 stack의 값을 비교
    // stack의 마지막값과 현재값을 비교해서 현재값이 stack 마지막값보다 작으면 가격이 떨어진거니까
    // stack의 마지막 인덱스를 pop으로 꺼내와서 answer값에 저장

    // 지속된 시간값과, 가격이 떨어지지않은 인덱스값을 따로관리 해서
    // 마지막에 비교하여 계산

    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const top = stack.pop(); // 가격이 처음 떨어진 인덱스
      answer[top] = i - top; // 현재 시간(i) - 그때 인덱스(top) = 지속된 시간
    }
    // 아직 가격이 떨어지지 않은 인덱스는 스택에 저장
    stack.push(i);
  }
  // 아직 스택에 남아있는 인덱스들은
  // 끝까지 가격이 떨어지지 않았던 경우
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top; // 끝까지 유지된 시간이므로 전체 길이 - 현재 위치

  }

  return answer;
}
