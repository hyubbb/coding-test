function solution(nums) {
  const pokemon = [...new Set(nums)];
  return pokemon.length < nums.length / 2 ? pokemon.length : nums.length / 2;
}

solution([3, 1, 2, 3]); //2
