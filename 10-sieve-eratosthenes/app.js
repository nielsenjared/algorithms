const sieve = (num) => {
    const bools = new Array(num + 1).fill(true);
    bools[0], bools[1] = false;

    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (bools[i] === true) {
            primes.push(i);

            //let j = i * 2;
            let j = i * i;

            while (j <= num) {
                bools[j] = false;
                j += i;
            }
        }
    }

    return primes;
}

let result = sieve(100);

console.log(result);
