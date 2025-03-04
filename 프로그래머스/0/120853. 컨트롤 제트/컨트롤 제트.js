function solution(s) {
  const a = [];
  s.split(" ").forEach((item) => {
    if (item === "Z") {
      a.pop();
    } else {
      a.push(item);
    }
  });
  return a.reduce((acc, cur) => acc + +cur, 0);
}