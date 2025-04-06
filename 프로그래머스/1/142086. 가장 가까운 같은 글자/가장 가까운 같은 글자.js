function solution(s) {    
    return [...s].map((a,idx)=>{
        let pos = s.slice(0,idx).lastIndexOf(a);
        return pos<0? pos: idx-pos
    })
}