function solution(numbers, target) {
  let count = 0;

  function dfs(index, currentSum) {
    console.log(index, currentSum, "target", target, "count:", count);
    // 모든 숫자를 다 사용했을 때
    if (index === numbers.length) {
      // 현재 합이 타겟 넘버와 일치하면 카운트 증가
      if (currentSum === target) {
        count++;
      }
      return;
    }

    // 모든 숫자를 다 더한뒤에, 타겟 넘버가 일치하지 않으면
    // 가장 마지막 연산이었던 currentSum + numbers[index]를 해줬던 것을 return으로 돌아나와서
    // currentSum - numbers[index]를 해준다.
    // 그러면 1+1+1+1+1 이었던 마지막 상황에서 1+1+1+1-1 이 되어서 currentSum 값이 3이 되어서 target값과 일치 하게 되어 count가 증가한다.
    // 그러면 그 다음의 경우는 1+1+1-1+1 이 되어야지 새로운 경우의 target을 만드는 방법이 되기때문에 count가 증가할것이다.

    // count가 증가하고 나서 return 이 되고 나면 재귀를 돌아나와서 index의 값은 3이된다.
    // index의 값이 3인상태에서 currentSum은 2가 되어서 dfs를 돌면, 1+1+1 인 상태에서 dfs(4,2)로 전달된 index는 +1 이 되어서 4가 되지만, numbers길이와 같지 않기때문에
    // 숫자를 더해주는 경우를 다시 재귀하게 된다. 그럼 dfs(4+1, 2+1) 이 되기때문에 5,3 이 되어서 currentSum이 target과 일치하게 되어서 count가 증가하게 된다.
    // 그럼 1+1+1-1+1 이 되는 경우가 생기게 된다.

    // 위의과정에서 count++가 되면 다시 return 이 되는데 그럼 그 전의 값인 dfs(4+1,2+1) 이었으니
    // dfs(4+1,2-1)이 되어서 (5,1)인상태가 되는데  numbers.length와 같지 않기때문에 다시 재귀를 돌게된다.
    // 1+ 의 상태가 되어버린것이다.

    // 현재 숫자를 더하는 경우
    dfs(index + 1, currentSum + numbers[index]);

    // 현재 숫자를 빼는 경우
    dfs(index + 1, currentSum - numbers[index]);
  }

  // DFS 시작
  dfs(0, 0);

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
// console.log(solution([4, 1, 2, 1], 4)); // 2
