const gcd = (n, m) => {

    while (m > 0)  {
      let r = m;
      m = n % m;
      n = r;
    }
    return n;
}

