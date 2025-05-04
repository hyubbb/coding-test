function solution(i, j, k) {
    let count=0;
    for(let a=i; a<=j;a++){
        count += a.toString().split(k).length-1
    }
    return count;
    
}