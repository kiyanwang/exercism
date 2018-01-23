export default class Transcriptor {
    toRna(dna) {
        return dna.split('').map(l => this.dnaToRna(l)).join('');
    }

    dnaToRna(nucleotide) {
        switch (nucleotide) {
            case 'G': return 'C';
            case 'C': return 'G';
            case 'T': return 'A';
            case 'A': return 'U';
            default:
              throw new Error('Invalid input DNA.');
        }
    }
}
