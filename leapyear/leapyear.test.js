const isLeap = require('./index');

test('isLeap function exists', () => {
  expect(isLeap).toBeDefined();
});

test('isLeap returns true', () => {
  expect(isLeap(1600)).toBeTruthy();
});

test('isLeap returns false', () => {
  expect(isLeap(1700)).toBeFalsy();
});
