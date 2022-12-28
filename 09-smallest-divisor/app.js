const smallestDivisor = n => {
    if (n <= 1) {
        return "Enter a number greater than 1";
    } else if (n % 2 == 0) {
        return "2"
    } else {
        let r = Math.sqrt(n);

        let d = 3;
        
        while ((n % d != 0) && (d < r)) {
            d = d + 2;
        }

        if (n % d == 0) {
            return d;
        } else {
            return n;
        }
    }
}