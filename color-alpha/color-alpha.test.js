const colorAlpha = require('./index');

test('function exists', () => {
  expect(colorAlpha).toBeDefined();
});

test('', () => {
  expect(colorAlpha(42)).toEqual('Transparent');
});

test('', () => {
  expect(colorAlpha(100)).toEqual('Translucent');
});

test('', () => {
  expect(colorAlpha(255)).toEqual('Opaque');
});
