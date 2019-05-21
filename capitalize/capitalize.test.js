const capitalize = require('./index');

test('function exists', () => {
  expect(capitalize).toBeDefined();
});

test('', () => {
  expect(capitalize('the quick brown fox')).toEqual('The Quick Brown Fox');
});

test('', () => {
  expect(capitalize('jumps over the lazy dog')).toEqual('Jumps Over The Lazy Dog');
});
