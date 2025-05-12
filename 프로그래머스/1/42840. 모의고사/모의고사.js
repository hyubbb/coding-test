function solution(answers) {
    var answer = [];
    
    /* 각 수포자의 찍는 방식 배열에 저장*/
    var list = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    /* 각 수포자의 점수 담을 point 변수에 배열 선언 */ 
    var point = [0,0,0]
    
    /* 각 수포자의 찍는 방식에 따라서 답안 중 맞는 게 있는지에 따라서 각 점수에 1점씩 더하기*/
    for(var i=0; i<answers.length; i++){
        if(answers[i] === list[0][i%5])
            point[0]++;
        if(answers[i] === list[1][i%8])
            point[1]++;
        if(answers[i] === list[2][i%10])
            point[2]++;
    }

    /* 가장 많이 맞춘 수포자를 구분하기 위한 변수 max 선언 */
    var max =0;

    /* 가장 많이 맞춘 수포자의 점수를 max 변수에 집어넣음. */
    for(var j=0; j<point.length; j++){
        if(point[j] > max)
            max = point[j];
    }
    /* 점수가 최고 점수랑 같다면 점수 배열의 길이를 1 더해준다. */
    /* 가장 높은 점수를 받은 사람이 중복으로 있을 경우를 해결 */
    for(var k=0; k<point.length; k++){
        if(max===point[k])
            answer.push(k+1);
    }

    /* 결과 return */
    return answer;
}