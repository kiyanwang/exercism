module.exports = function Isogram(word) {

  // dont care about spaces or hyphens so lets
  // get rid of them
  this.word = word.replace(/ |-/g, '');

  this.isIsogram = function () {
    // list each unique character in the string
    var uniqueChars = this.word.toLowerCase().split('').filter(function(elem, idx, self) {
      return self.indexOf(elem) === idx;
    });

    // if the length of the word is not equal the number of unique characters
    // we found then it's not an isogram
    return uniqueChars.length === this.word.length;
  }
};
