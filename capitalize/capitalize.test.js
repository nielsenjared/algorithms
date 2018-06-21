const capitalize = require('./index');

test('function exists', () => {
  expect(capitalize).toBeDefined();
});

test('', () => {
  expect(capitalize('the quick brown fox')).toEqual('The Quick Brown Fox');
});

test('', () => {
  expect(capitalize('jumped over the lazy dogs')).toEqual('Jumped Over The Lazy Dogs');
});
