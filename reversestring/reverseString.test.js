const reverseString = require('./index');

test('function exists', () => {
  expect(reverseString).toBeDefined();
});

test('Reverse a string', () => {
  expect(reverseString('abcd')).toEqual('dcba');
});

test('Reverse a string with space', () => {
  expect(reverseString('  abcd')).toEqual('dcba  ');
});
