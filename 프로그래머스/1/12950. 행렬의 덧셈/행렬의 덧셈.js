function solution(arr1, arr2) {
    var answer = [[]];
    answer = arr1.map((a1,i) => a1.map((a2,j)=> a2+arr2[i][j]));
    return answer;
}