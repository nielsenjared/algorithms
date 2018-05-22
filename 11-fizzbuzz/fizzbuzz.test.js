const fzbz = [ 1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz' ];

  const fizzbuzz = require('./index');

  test('function exists', () => {
    expect(fizzbuzz).toBeDefined();
  });

  test('', () => {
    expect(fizzbuzz(15)).toEqual(fzbz);
  });
