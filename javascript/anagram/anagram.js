module.exports = function Anagram(word) {

  var normalizedWord = normalize(word);

  function match(potentials) {
   if (typeof potentials === 'string') {
      potentials = [].slice.apply(arguments);
    }
    return potentials.filter(isAnagram);
  }

  function isAnagram(otherWord) {
    return word.toLowerCase() !== otherWord.toLowerCase() && normalizedWord == normalize(otherWord);
  }

  function normalize(word) {
    return word.toLowerCase().split("").sort().join("");
  }

  return {
    matches: match
  };

};
