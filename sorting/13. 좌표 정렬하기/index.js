let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const data = input.splice(1);
const result = data.sort((a, b) => {
  const c = a.split(" ");
  const d = b.split(" ");
  if (c[0] == d[0]) return c[1] - d[1];
  return c[0] - d[0];
});

console.log(result.join("\n"));
