const gcd = (n, m) => {
    if (m === 0) {
        return n;
    }

    return gcd(m, n % m);
};

let result = gcd(8, 4)

console.log(result)