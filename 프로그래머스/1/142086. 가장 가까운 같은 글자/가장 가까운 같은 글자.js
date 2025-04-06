function solution(s) {    
    // 1번째 방법 O(n2) 효율최악
    // return [...s].map((a,idx)=>{
    //     let pos = s.slice(0,idx).lastIndexOf(a);
    //     return pos<0? pos: idx-pos
    // })
    
    let hash = {};
     
    return [...s].map((a,idx)=>{
       let result =  hash[a] !== undefined ? idx-hash[a]: -1;
        hash[a] = idx;
        return result;
     })
}