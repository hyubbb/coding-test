function solution(sizes) {
    const a = sizes.map((v)=> Math.max(v[0],v[1]))?.sort((a,b)=>b-a);
    const b = sizes.map((v)=> Math.min(v[0],v[1]))?.sort((a,b)=>b-a);
  
    return a[0] * b[0]
}