function solution(s) {
  const answer = [];
  const b = s.split(" + ");

  const xSum = b
    .filter((v) => v.includes("x"))
    .reduce((acc, cur) => {
      acc += cur.length > 1 ? +cur.split("x")[0] : 1;
      return acc;
    }, 0);

  xSum && answer.push(xSum == 1 ? "x" : xSum + "x");

  const numSum = b
    .filter((v) => !v.includes("x"))
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  numSum && answer.push(numSum);

  return answer.join(" + ");
}