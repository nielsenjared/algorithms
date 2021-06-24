const intersects = (a, b) => {
  const x = [];
  for (let i = 0; i <= a.length; i++) {
    if (b.includes(a[i])) {
      x.push(a[i]);
    }
  }
  return x;
};

// TODO: write a one-liner

console.log(intersects(primes, odds));

module.exports = intersects;
