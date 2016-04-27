
var Pangram = function(input) {
  this.input = input;
  this.notAlphaChars = /[^a-z]+/gi;
  this.alphabetLength = 26;
};

Pangram.prototype.isPangram = function() {
  var unique  = {};
  var cleaned = (this.input.replace(this.notAlphaChars, '')).toLowerCase();
  cleaned.split('').forEach(function(letter){
    unique[letter] = true;
  });
  return (Object.keys(unique).length === this.alphabetLength);
};

module.exports = Pangram;
