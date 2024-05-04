let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const data = input;

for (let i = 1; i <= input[0]; i++) {
  let result = "";
  const [a, b] = data[i].split(" ");
  for (let j = 0; j < b.length; j++) {
    result += b[j].repeat(a);
  }
  console.log(result);
}
