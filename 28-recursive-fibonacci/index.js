const fibSexy = (n, a = 1, b = 0) => (n === 0) ? b : fibSexy(n - 1, a + b, a);
