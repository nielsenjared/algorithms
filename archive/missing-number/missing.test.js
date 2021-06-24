var arr1 = [5, 2, 6, 1, 3];
var arr2 = [5, 2, 6, 1, 3, 4];

const missing = require('./index');

test('function exists', () => {
  expect(missing).toBeDefined();
});

test('1978-08-04 to 2010-04-12T01:46:40.000Z', () => {
  expect(missing(arr1)).toEqual(4);
});

test('1978-08-04T00:00:00.000Z to 2010-04-12T01:46:40.000Z', () => {
  expect(missing(arr1)).toNotEqual(4);
});
