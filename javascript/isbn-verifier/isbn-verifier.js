const ISBN_PATERN = /^(?:\d\-?){9}\-?[\dX]$/;

export class ISBN {
  constructor(isbnNumber) {
    this.isbnNumber = isbnNumber;
  }

  static parseDigit(digit) {
    if (digit === "X") return 10;

    return Number.parseInt(digit);
  }

  isValid() {
    if (!this.isbnNumber.match(ISBN_PATERN)) return false;

    return this.checksum() % 11 === 0;
  }

  checksum() {
    return this.isbnNumber
      .match(/(\d|X)/g)
      .map(ISBN.parseDigit)
      .reverse()
      .reduce((sum, value, index) => sum + value * (index + 1), 0);
  }
}
