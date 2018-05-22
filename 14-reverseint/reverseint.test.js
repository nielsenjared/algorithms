const reverseint = require('./index');

test('reverseint function exists', () => {
  expect(reverseint).toBeDefined();
});

test('reverseint handles 0 as an input', () => {
  expect(reverseint(0)).toEqual(0);
});

test('reverseint positive numbers', () => {
  expect(reverseint(5)).toEqual(5);
  expect(reverseint(15)).toEqual(51);
  expect(reverseint(90)).toEqual(9);
  expect(reverseint(2359)).toEqual(9532);
});

test('reverseint negative numbers', () => {
  expect(reverseint(-5)).toEqual(-5);
  expect(reverseint(-15)).toEqual(-51);
  expect(reverseint(-90)).toEqual(-9);
  expect(reverseint(-2359)).toEqual(-9532);
});
