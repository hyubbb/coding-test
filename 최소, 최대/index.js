let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
s;
let data = input.map(Number);
let max = Math.max(...data);
console.log(`${max}\n${data.indexOf(max) + 1}`);
