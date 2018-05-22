const five6 = require('./index');

test('function exists', () => {
  expect(five6).toBeDefined();
});

test('input 5', () => {
  expect(five6(5)).toBeTruthy();
});

test('input 7', () => {
  expect(five6(7)).toBeFalsy();
});
