const pangram = require('./index');

test('pangram function exists', () => {
  expect(pangram).toBeDefined();
});

test('pangram returns true', () => {
  expect(pangram("The quick brown fox jumps over the lazy dog")).toBeTruthy();
});

test('pangram returns false', () => {
  expect(pangram("The quick red fox jumps over the lazy dog")).toBeFalsy();
});
