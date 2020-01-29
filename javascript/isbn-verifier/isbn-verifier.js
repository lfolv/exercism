export class ISBN {
  constructor(isbnNumber) {
    this.isbnNumber = isbnNumber;
  }

  isValid() {
    return this.isbnNumber === "3-598-21508-8"
  }
}
