export default class {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    const year = this.year;
    const common = (year % 4 !== 0) || ((year % 100 === 0) && (year % 400 !== 0));
    return !common;
  }
}

