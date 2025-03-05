function solution(arr, divisor) {
    
    
    const a = arr.sort((a,b)=>a-b).filter((num)=>num%divisor== 0)
    console.log(a)
    return a.length ? a : [-1];
}