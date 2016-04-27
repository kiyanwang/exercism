var Words = function() {};

Words.prototype.count = function(phrase) {
  var words = phrase.toLowerCase().split(/[\s\n]+/);
  var counts = {};
  for( var i=0; i<words.length; i++){
    if(words[i] == '') continue;
  
    counts[ words[i] ] = 1 + (counts[ words[i]] || 0 );
  }
  return counts;
};

module.exports = Words;
