function solution(s) {
  let queue = [];

  for (let i = 0; i < s.length; i++) {
    queue[queue.length - 1] === s[i] ? queue.pop() : queue.push(s[i]);
  }

  return queue.length ? 0 : 1;
}

solution("baabaa");
