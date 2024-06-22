function solution(participant, completion) {
  const start = [...participant].sort();
  const end = [...completion].sort();
  let result = "";
  if (start.length !== end.length) {
    for (let i = 0; i < start.length; i++) {
      if (start[i] !== end[i]) {
        result = start[i];
        break;
      }
    }
  }
  return result;
}

// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
