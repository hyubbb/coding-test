let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const data = input[1];
const result = [...data].reduce((a, b) => +a + +b);
console.log(result);
