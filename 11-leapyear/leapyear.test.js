const isLeap = require('./index');

test('isLeap function exists', () => {
  expect(isLeap).toBeDefined();
});

test('isLeap returns true', () => {
  expect(isLeap(2000)).toBeTruthy();
});

test('isLeap returns false', () => {
  expect(isLeap(1900)).toBeFalsy();
});
