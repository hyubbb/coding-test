function solution(nums) {
const pokemon = [...new Set(nums)];
return nums.length / 2 < pokemon.length ? nums.length/2 : pokemon.length
}