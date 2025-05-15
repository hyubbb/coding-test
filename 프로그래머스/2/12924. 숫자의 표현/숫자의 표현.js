function solution(n) {
  let count = 0;

  for (let l = 1; l * (l + 1) / 2 <= n; l++) {
    const numerator = n - (l * (l - 1)) / 2;
    if (numerator % l === 0) {
      count++;
    }
  }

  return count;
}
