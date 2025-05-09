function solution(clothes) {
  const map = new Map();

  let count = 1;

  for (const [name, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  for (const [key, value] of map) {
    count *= value + 1;
  }
  return count - 1;
}