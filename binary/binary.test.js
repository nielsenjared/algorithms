const binary = require('./index');

test('function exists', () => {
  expect(binary).toBeDefined();
});

test('101 base 2 equals 5 base 10', () => {
  expect(binary(101)).toEqual(5);
});

test('10111 base 2 equals 23 base 10', () => {
  expect(binary(10111)).toEqual(23);
});
