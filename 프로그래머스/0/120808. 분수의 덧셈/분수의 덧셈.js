function solution(numer1, denom1, numer2, denom2) {
    let r = 1;

    const func = (a, b) => {
        const min = Math.min(a, b);
        for (let i = 1; i <= min; i++) {
            if (a % i === 0 && b % i === 0) {
                r = i;
            }
        }
    };

    const top = denom1 * numer2 + denom2 * numer1;
    const bottom = denom1 * denom2;

    func(top, bottom);
    return [top / r, bottom / r];
}
