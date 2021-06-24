const isomorphic = require('./index');

test('isomorphic function exists', () => {
  expect(isomorphic).toBeDefined();
});

test('isomorphic returns true', () => {
  expect(isomorphic('paper', 'title')).toBeTruthy();
});

test('isomorphic returns false', () => {
  expect(isomorphic('paper', 'tiger')).toBeFalsy();
});

test('isomorphic returns true', () => {
  expect(isomorphic('error', 'abbcb')).toBeTruthy();
});

test('isomorphic returns false', () => {
  expect(isomorphic('paper', 'titles')).toBeFalsy();
});
