// function solution(n) {
//   const correct = [];
//   let cnt = 0;
//   let first = [];
//   n.split("").forEach((el, idx) => {
//     if (!first.length) {
//       first.push(el);
//       correct.push(first);
//       cnt++;
//     } else {
//       first[0] == el ? cnt++ : cnt--;
//       first.push(el);
//       cnt == 0 ? (first = []) : null;
//     }
//   });
//   return correct.length;
// }

function solution(n) {
  let correct = 0;
  let cnt = 0;
  let first = [];
  n.split("").forEach((el, idx) => {
    if (cnt === 0) {
      correct++;
      first = el;
      cnt++;
    } else {
      first == el ? cnt++ : cnt--;
    }
  });
  return correct;
}

solution("aaabbaccccabba");
