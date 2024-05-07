let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

input = input.splice(1);

const data = new Set(input);

console.log(
  [...data]
    .sort((a, b) => {
      if (a.length === b.length) return a.localeCompare(b);
      return a.length - b.length;
    })
    .join("\n")
);
