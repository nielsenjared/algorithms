const anagram = require('./index');

test('function exists', () => {
  expect(anagram).toBeDefined();
});

test('cinema & iceman', () => {
  expect(anagram('cinema', 'iceman')).toBeTruthy();
});

test('cinema & icemen', () => {
  expect(anagram('cinema', 'icemen')).toBeFalsy();
});
