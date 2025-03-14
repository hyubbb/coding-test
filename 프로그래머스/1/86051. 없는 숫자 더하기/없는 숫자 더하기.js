function solution(numbers) {
    var answer = -1;
    var num = [0,1,2,3,4,5,6,7,8,9];
    answer = num.filter(x=>!numbers.includes(x)).reduce((a,b)=>a+b);    
    
    return answer;
}