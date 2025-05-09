function solution(s) {
    const answer=[];
    for(const v of s){
        if(v=="("){
            answer.push(v);
        }else{
            if(answer.length == 0) return false;
            answer.pop();
        }
    }
    return answer.length == 0 ? true : false
}
