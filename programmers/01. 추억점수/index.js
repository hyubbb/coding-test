function solution(name, yearning, photo) {
  const answer = photo.map((arr) =>
    arr.reduce((acc, curr) => {
      acc += yearning[name.indexOf(curr)] || 0;

      console.log(acc);
      return acc;
    }, 0)
  );
}

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

solution(name, yearning, photo);
