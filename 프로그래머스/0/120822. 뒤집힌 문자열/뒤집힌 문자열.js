function solution(my_string) {
    let answer = [];
    [...my_string].forEach((str)=>{
        answer.unshift(str);
    });
    return answer.join("");
}