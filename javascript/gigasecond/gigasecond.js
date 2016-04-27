var Gigasecond = function(startDate) {
  this.startDate = startDate;
  this.gigaSeconds = Math.pow(10,12);
};

Gigasecond.prototype.date = function() {
  return new Date(this.startDate.getTime() + this.gigaSeconds);
};

module.exports = Gigasecond;
