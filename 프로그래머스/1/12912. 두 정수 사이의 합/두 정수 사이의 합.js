function solution(a, b) {
    let result=0;
    let [min,max]=[a,b].sort((a,b)=>a-b);
    
    for(let i=min; i<=max; i++){
        result+=i;
    }
    return result;
}