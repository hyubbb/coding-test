function solution(arr, divisor) {
    
    
    const a = arr.sort((a,b)=>a-b).filter((num)=>num%divisor== 0) 
    return a.length ? a : [-1];
}