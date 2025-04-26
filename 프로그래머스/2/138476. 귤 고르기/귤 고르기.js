function solution(k, tangerine) {
  let answer = 0;
  const cnt = {};
 
  tangerine.forEach((t) => (cnt[t] = (cnt[t] || 0) + 1));
 
  const sortValue = Object.values(cnt).sort((a, b) => b - a);
 
  for (const v of sortValue) {
    answer++;
    if (k > v) k -= v;
    else break;
  }

  return answer;
}