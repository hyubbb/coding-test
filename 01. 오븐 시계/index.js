let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

//
const [a, b] = input[0].split(" ").map(Number);

const c = +input[1];

let time = a * 60 + b + c;
time %= 1440;
const hour = Math.floor(time / 60);
const minute = time % 60;

console.log(hour, minute);
return `${hour} ${minute}`;
