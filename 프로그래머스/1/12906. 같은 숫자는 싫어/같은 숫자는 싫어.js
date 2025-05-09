function solution(arr)
{

    let answer = arr.filter((v,i)=>v!==arr[i-1])
    
    
    // let answer = arr.filter( (v,i) => v !== arr[i-1]);
    
    return answer;
}