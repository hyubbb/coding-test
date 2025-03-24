function solution(score) {
    const a = score.map(([c,d])=>(c+d)/2);
    const b = [...a].sort((a,b)=>b-a);
    console.log(b)
    const e = a.map((f)=>b.indexOf(f)+1);
   return e
}