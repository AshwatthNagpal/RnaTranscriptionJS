export const toRna = dna => {
  let rna = '';
  for (let i = 0; i < dna.length; i += 1) {
    if (dna[i] === 'C') {
      rna += 'G';
    } else if (dna[i] === 'G') {
      rna += 'C';
    } else if (dna[i] === 'A') {
      rna += 'U';
    } else if (dna[i] === 'T') {
      rna += 'A';
    }
  }
  return rna;
};
