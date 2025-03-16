function solution(price, money, count) {
    var answer = -1;
    let box = 0;
    for (let i = 1; i <= count; i++) {
        box += (price * i);
    }
    answer = (box - money) > 0 ? box - money : 0;
    return answer;
}