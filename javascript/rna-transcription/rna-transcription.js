var DnaTranscriber = function() {
  this.nucleotideMappings = {
    'G':'C',
    'C':'G',
    'A':'U',
    'T':'A'
  };
};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var self = this;
  return dnaStrand.replace(/./g, function(match, capture){
    return self.nucleotideMappings[match];
  });
};

module.exports = DnaTranscriber;
