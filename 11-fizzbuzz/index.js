const fizzbuzz = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

const es6y = n => {
  return [...Array(n + 1).keys()].slice(1).map(i => (i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
  // return [...Array(n + 1).keys()].slice(1).map(i => [ [ 'fizz' ][i%3], [ 'buzz' ][i%5] ].join( '' ) || i);
}

module.exports = fizzbuzz;
