const ISBN_PATERN = /^(?:\d\-?){9}\-?[\dX]$/;
const ISBN_DIGITS = /[\dX]/g
const ISBN_LENGTH = 10

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
      .match(ISBN_DIGITS)
      .map(ISBN.parseDigit)
      .reduce((sum, value, index) => sum + value * (ISBN_LENGTH - index), 0);
  }
}
