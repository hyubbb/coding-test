function solution(my_string) {
  const tokens = my_string.split(' ');  
  return tokens.reduce((acc, cur, idx) => {
    if (cur === '+') {
      return acc + Number(tokens[idx + 1]);
    } else if (cur === '-') {
      return acc - Number(tokens[idx + 1]);
    }
    return acc;  
  }, Number(tokens[0])); 
}
