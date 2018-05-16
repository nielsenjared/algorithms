const spaceAge = require('./index');

const gigasecond = {
  earth: 31.69,
  mercury: 131.57,
  venus: 51.51,
  mars: 16.85,
  jupiter: 2.67,
  saturn: 1.08,
  uranus: 0.38,
  neptune: 0.19 };

const sort = {
  earth: 39.12,
  mercury: 162.43,
  venus: 63.59,
  mars: 20.8,
  jupiter: 3.3,
  saturn: 1.33,
  uranus: 0.47,
  neptune: 0.24
};

test('function exists', () => {
  expect(spaceAge).toBeDefined();
});

test('1978-08-04 to 2010-04-12T01:46:40.000Z', () => {
  expect(spaceAge(1000000000)).toEqual(gigasecond);
});

test('1978-08-04T00:00:00.000Z to 2010-04-12T01:46:40.000Z', () => {
  expect(spaceAge(1234567890)).toEqual(sort);
});
