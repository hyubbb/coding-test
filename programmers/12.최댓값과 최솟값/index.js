function solution(n) {
  return `${Math.min(...n.split(" "))} ${Math.max(...n.split(" "))}`;
  // const num = n.split(" ");
  // return `${Math.min(...num)} ${Math.max(...num)}`;
}

solution("1 2 3 4"); // "1 4"
