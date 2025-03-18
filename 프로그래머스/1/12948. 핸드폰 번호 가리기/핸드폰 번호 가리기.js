function solution(phone_number) {
    var answer = '';
    var a = phone_number.slice(0,-4);
    var b = phone_number.slice(-4);
    answer="*".repeat(a.length)+b;

    return answer;
}