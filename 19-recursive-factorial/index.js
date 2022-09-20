const factorial = n => {
    if (n == 0 || n === 1) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
 };

 let result = factorial(5);

 console.log(result);