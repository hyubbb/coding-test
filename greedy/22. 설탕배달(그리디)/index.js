let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

let result = 0;

while (input >= 0) {
  if (input % 5 === 0 || input == 0) {
    result += parseInt(input / 5);
    break;
  }
  input -= 3;
  result++;
}

if (input < 0) result = -1;
console.log(result);
