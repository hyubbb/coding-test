function solution(ineq, eq, n, m) {
    eq= eq=="!" ? "": eq
    return eval(n+ineq+eq+m)?1:0
}