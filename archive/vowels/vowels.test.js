const vowels = require('./index.js');

test('function exists', () => {
  expect(vowels).toBeDefined();
});

test("Hello World!", () => {
  expect(vowels("Hello World!")).toEqual(3);
});

test("Why?", () => {
  expect(vowels("Why?")).toEqual(0);
});
