const factorial = n => {
    let result = 1;

    if (n == 0 || n == 1) {
        return result;
    }


    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

let result = factorial(5)

console.log(result)