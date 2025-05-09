function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  days.push(Infinity); // 마지막 처리 유도용 가짜값

  let maxDay = days[0];
  let count = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = days[i];
      count = 1;
    }
  }

  return answer;
}