const cipher = require('./index');

test('function exists', () => {
  expect(cipher).toBeDefined();
});

test('ABCD to EFGH', () => {
  expect(cipher('ABCD')).toEqual('EFGH');
});

test('WXYZ to ABCD', () => {
  expect(cipher('WXYZ')).toEqual('ABCD');
});
