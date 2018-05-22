const phabetic = require('./index');

test('function exists', () => {
  expect(phabetic).toBeDefined();
});

test('aeiou evaluates true', () => {
  expect(phabetic("aeiou")).toBeTruthy();
});

test('uoiea evaluates false', () => {
  expect(phabetic("uoiea")).toBeFalsy();
});
