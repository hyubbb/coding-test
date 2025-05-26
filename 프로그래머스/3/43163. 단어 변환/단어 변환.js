function solution(begin, target, words) {
  if (!words.includes(target) && words.length < 3) return 0;
  let count = 0;
  let queue = [];
  let visited = [];
  queue.push([begin, count]);
  while (queue.length > 0) {
    const [text, count] = queue.shift();

    if (text == target) return count;

    words.forEach((word) => {
      let wordEqual = 0;
      if (visited.includes(word)) return;

      for (let j = 0; j < word.length; j++) {
        if (text[j] === word[j]) {
          wordEqual++;
        }
      }
      if (wordEqual == word.length - 1) {
        visited.push(word);
        queue.push([word, count + 1]);
      }
    });
  }
  return 0;
}
