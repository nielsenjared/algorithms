def gcd(n, m):
    while (m > 0):
        r = m
        m = n % m
        n = r
    
    return n