function solution(n) {
   const num = n.split(" ");
  return `${Math.min(...num)} ${Math.max(...num)}`;
}