function solution(n) {
const reg = RegExp("^[0-9]*$").test(n);
  const result = (reg && (n.length === 4 || n.length === 6)) ? true:false;
  return result;
}