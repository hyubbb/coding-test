function solution(n) {
  console.log(
    n
      .toString()
      .split("")
      .reverse()
      .map((el) => +el)
  );
}

solution(12345);
