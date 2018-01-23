const letters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Generates a random key
 */
function generateRandomKey() {
  var i, randomKey = '';
  for(i = 0; i<50; i++){
    var randomIndex = Math.floor(Math.random() * letters.length);
    randomKey += letters[randomIndex];
  }

  return randomKey;
}

/**
 * A simple Caeserian shift Cipher
 *
 * @constructor
 * @param key to use in our shift cipher
 */
var Cipher = function(key) {
  console.log(key);
  if(key !== undefined && !key.match(/^[a-z]+$/)){
    throw ('Bad key');
  }
  //if(key !== undefined && !key.match(/^[a-z]+$/)){
    //throw ('Bad Key');
  //}

  this.key = key || generateRandomKey();
};

/**
 * encodes a plain text string
 *
 * @param {string} plainText = the string to encode
 */
Cipher.prototype.encode = function(plainText){
  var characters = plainText.split('');
  var encoded = [];
  var self = this;
  characters.forEach(function(c, index){

    var newIndex = letters.indexOf(c) +
                   letters.indexOf(self.key[index]);

    if(newIndex >= letters.length){
      newIndex -= letters.length;
    }
    encoded.push(letters[newIndex]);
  });

  return encoded.join('');
};

/**
 * decodes an encoded cipher
 *
 * @param the cipher to decode
 */
Cipher.prototype.decode = function(cipher){
  var characters = cipher.split('');
  var decoded = [];
  var self = this;
  characters.forEach(function(c, index){
    var newIndex = letters.indexOf(c) -
                   letters.indexOf(self.key[index]);

    if(newIndex < 0){
      newIndex += letters.length;
    }
    decoded.push(letters[newIndex]);
  });

  return decoded.join('');
};

module.exports = Cipher;
