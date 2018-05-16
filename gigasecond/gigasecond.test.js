const gigasecond = require('./index');

test('function exists', () => {
  expect(gigasecond).toBeDefined();
});

test('1978-08-04 to 2010-04-12T01:46:40.000Z', () => {
  expect(gigasecond("1978-08-04")).toEqual('2010-04-12T01:46:40.000Z');
});

test('1978-08-04T00:00:00.000Z to 2010-04-12T01:46:40.000Z', () => {
  expect(gigasecond('1978-08-04T00:00:00.000Z')).toEqual('2010-04-12T01:46:40.000Z');
});
