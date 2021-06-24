const palindrome = require('./index');

test('function exists', () => {
  expect(palindrome).toBeDefined();
});

test('racecar', () => {
  expect(palindrome('racecar')).toBeTruthy();
});

test('racecars', () => {
  expect(palindrome('racecars')).toBeFalsy();
});
