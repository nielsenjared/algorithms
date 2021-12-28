const sieve = n => {
    let primes = [1, 2, 3, 5];

    let x = 5; 
    let y = 2;

    while (x < n) {
        x = x + y;
        y = Math.abs(y - 6);



        primes.push(x);
    }

    return primes;
}

console.log(sieve(125));