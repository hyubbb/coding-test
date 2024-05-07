let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let data = input.splice(1);
let keyData = data.map((el, key) => {
  const [age, name] = el.split(" ");
  return { key, age, name };
});

let result = keyData.sort((a, b) => a.age - b.age || a.key - b.key);
console.log(result.map((el) => `${el.age} ${el.name}`).join("\n"));
