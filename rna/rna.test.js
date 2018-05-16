const rna = require('./index');

test('function exists', () => {
  expect(rna).toBeDefined();
});

test('dna to rna #1', () => {
  expect(rna('GCTA')).toEqual('CGAU');
});

test('dna to rna #2', () => {
  expect(rna('ATCG')).toEqual('UAGC');
});
