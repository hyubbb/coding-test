function solution(s) {
  const answer = [];
  const b = s.split(" ").filter((v) => v !== "+");
  const c = b.filter((v) => v.includes("x"));
  const d = b.filter((v) => !v.includes("x"));
  const e = c.reduce((acc, cur) => {
    if (cur.length > 1) {
      acc += +cur.split("x")[0];
    } else {
      acc += 1;
    }
    return acc;
  }, 0);

  if (e === 1) answer.push("x");
  else if (e > 1) answer.push(e + "x");

  const constantSum = d.reduce((acc, cur) => acc + parseInt(cur), 0);
  if (constantSum > 0) answer.push(constantSum);

  return answer.join(" + ");
}