let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// console.log(input.split(" ").length);

const data = input[0].trim().split(" ");
if (input == "") {
  console.log(0);
} else {
  console.log(data.length);
}
