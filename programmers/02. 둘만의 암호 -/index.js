function solution(s, skip, index) {
  var answer = "";
  var tmpIndex = index;
  for (var i = 0; i < s.length; i++) {
    var asciiCode = s[i].charCodeAt(0);
    for (var j = 1; j <= index; j++) {
      var nextChar = String.fromCharCode(asciiCode + j);
      var nextCharChk = /^[a-zA-Z]$/.test(nextChar);
      if (nextCharChk) {
        if (skip.includes(nextChar)) {
          index++;
        } else {
          a = nextChar;
        }
      } else {
        index++;
        nextChar = "a";
        asciiCode = nextChar.charCodeAt(0) - j - i;
        a = nextChar;
      }
    }
    index = tmpIndex;
    answer += a;
  }

  return answer;
}

solution("aukks", "wbqd", 5); // "happy"
solution("bcdefghijklmnopqrstuvwxyz", "a", 1); // "cdefghijklmnopqrstuvwxyzb"
solution("z", "a", 1); // "cdefghijklmnopqrstuvwxyzb"
