const gcd = (n, m) => {
    let remainder;
    while ((n % m) > 0)  {
      remainder = n % m;
      n = m;
      m = remainder;
    }
    return remainder;
}

let result = gcd(18, 30)

console.log(result)

