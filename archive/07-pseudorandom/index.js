const pseudorandomGenerator = (seed, x, m, n) => {
    const results = [];
    for (let i = 0; i < n; i++) {
        seed = (x * seed + i) % m;
        results.push(seed);
    }
    return results;
}