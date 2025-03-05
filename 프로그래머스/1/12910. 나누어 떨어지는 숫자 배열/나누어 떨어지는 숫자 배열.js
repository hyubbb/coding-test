function solution(arr, divisor) {
    const a = [];
    
    

    arr.sort((a,b)=>a-b).forEach((num)=>{
        
        if(num%divisor == 0){
            a.push(num);
        }
    })
    return a.length ? a : [-1];
}