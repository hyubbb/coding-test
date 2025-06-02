function solution(numbers, target) {
    let count = 0;
    
    function dfs(index, currentSum) {
        // 모든 숫자를 다 사용했을 때
        if (index === numbers.length) {
            // 현재 합이 타겟 넘버와 일치하면 카운트 증가
            if (currentSum === target) {
                count++;
            }
            return;
        }
        
        // 현재 숫자를 더하는 경우
        dfs(index + 1, currentSum + numbers[index]);
        
        // 현재 숫자를 빼는 경우
        dfs(index + 1, currentSum - numbers[index]);
    }
    
    // DFS 시작
    dfs(0, 0);
    
    return count;
}

// 예시 테스트 케이스
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4));   // 2
