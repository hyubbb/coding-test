function solution(s) {
  s = s.toLowerCase();
  var answer = s
    .split(" ")
    .map((s) => {
      let arr = s.split("");
      if (arr[0] != null) arr[0] = arr[0].toUpperCase();
      return arr.join("");
    })
    .join(" ");

  console.log(answer);
  return answer;
}

solution("  for the what 1what  ");
// solution("    aaa    3aaa  aa  3aaaa    ");
// solution("3people unFollowed me");
// solution("for the last week");
