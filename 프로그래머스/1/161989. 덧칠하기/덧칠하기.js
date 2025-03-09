function solution(n, m, section) {
    let count = 0; // 롤러 횟수
    let i = 0; // 인덱스

    while (i < section.length) {
        count++; // 롤러 카운팅
        let start = section[i]; // 롤러 시작점
        while (i < section.length && section[i] < start + m) {
            i++; // 롤러 범위 내의 모든 section을 처리
        }
    }

    return count;
}