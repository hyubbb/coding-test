function solution(priorities, location) {
  let count = 0;
  const process = priorities.map((priority, index) => {
    return {
      priority,
      index,
    };
  });

  while (process.length) {
    const current = process.shift();
    const hasHigher = process.some((item) => item.priority > current.priority);
    if (hasHigher) {
      process.push(current);
    } else {
      // 최대값이 가장앞에 온 경우
      // 카운트증가
      count++;
      if (current.index === location) {
        return count;
      }
    }
  }
}