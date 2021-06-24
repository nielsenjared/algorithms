const rna = dna => {
  let trans = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == 'G') {
      trans += 'C';
    } else if (dna[i] == 'C') {
      trans += 'G';
    } else if (dna[i] == 'T') {
      trans += 'A';
    } else {
      trans += 'U';
    }
  }
  return trans;
}

//one liner
//return dna.split('').map(e => e == 'G' ? e = 'C' : e == 'C' ? e = 'G' : e == 'T' ? e = 'A' : e = 'U').join('');

module.exports = rna;
