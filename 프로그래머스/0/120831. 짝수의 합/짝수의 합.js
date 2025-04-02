function solution(n) {
    let answer = 0;
    
    for(let i = 0; i<=n; i++){
        answer += i%2==0 ? i : 0
    }
    return  answer;
}