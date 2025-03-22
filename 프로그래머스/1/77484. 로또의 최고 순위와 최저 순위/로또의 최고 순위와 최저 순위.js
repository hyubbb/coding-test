function solution(lottos, win_nums) {
    var answer = [];
    let cnt_zero = lottos.filter(x=>x==0).length; 
    let rank = [6,6,5,4,3,2,1];
    let min_rank = win_nums.filter(x=>lottos.includes(x)).length;
    let max_rank = min_rank+cnt_zero;
    answer=[rank[max_rank],rank[min_rank]];
    return answer;

}