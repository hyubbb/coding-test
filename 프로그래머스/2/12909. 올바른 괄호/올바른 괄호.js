function solution(s) {
    const answer=[];
    for(let i=0; i<s.length; i++){
        if(s[i]=="("){
            answer.push(s[i]);
        }else{
            if(answer.length == 0) return false;
            answer.pop();
        }
    }
    console.log(answer)
    return answer.length == 0 ? true : false
}
