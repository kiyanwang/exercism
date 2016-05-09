var PhoneNumber = function(number) {
  this.cleanedNumber = this.clean(number);
};

PhoneNumber.prototype.clean = function(number) {
  // first get rid of anything which isnt a digit
  var n = number.replace(/\D/g,'');  

  if( n.length == 10 ){
    return n;
  } else if ( n.length === 11 && n[0] === '1' ) {
    return n.substr(1, n.length);
  } else {
    return '0000000000';
  }
};

PhoneNumber.prototype.number = function(){
  return this.cleanedNumber;
};

PhoneNumber.prototype.areaCode = function (){
  return this.number().substr(0,3);
};

PhoneNumber.prototype.exchangeCode = function (){
  return this.number().substr(3,3);
};

PhoneNumber.prototype.subscriberNumber = function (){
  return this.number().substr(6,4);
};

PhoneNumber.prototype.toString = function(){
  return '(' + this.areaCode() + ') ' + this.exchangeCode() + '-' + this.subscriberNumber();
};

module.exports = PhoneNumber;
