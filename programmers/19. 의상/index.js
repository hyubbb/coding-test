// 해시 문제
// 회소 한개의 의상은 입는다는 것은, 하나도 안입는 날은 없다는거고,
// 확률 계산을 할때, 옷을안입는 경우의 수도 계산을 해준다음에, 모든옷을 입지 않은 경우를 빼준다.
// 각 종류의 갯수를 곱한 후 모두 입지 않은 경우를 빼준다.
function solution(clothes) {
  const clothesMap = new Map();
  let result = 1;
  clothes.forEach(([name, type], idx) => {
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1);
    } else {
      clothesMap.set(type, 1);
    }
  });
  for (let value of clothesMap.values()) {
    result *= value + 1;
  }
  return clothesMap.size > 1 ? (result -= 1) : clothes.length;
}

// console.log(
//   solution([
//     ["yellow_hat", "headgear"],
//     ["blue_sunglasses", "eyewear"],
//     ["green_turban", "headgear"],
//     ["jeans", "bottom"],
//   ])
// ); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
