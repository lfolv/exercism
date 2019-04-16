/**
 * Provides helpful methods to handle with squares
 * numbers calculations.
 */
export class Squares {
  /**
   * Create a new Squares object
   *
   * @param {Number} number - first N natural numbers to calculate
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * Calculate the square of the sum of the first N natual numbers.
   * The square of the sum of the first ten natural number is
   * (1 + 2 + ... + 10) ** 2 = 55 ** 2 = 3025
   *
   * @return [Number] square of the sum
   *
   * @example
   *  const squares = new Square(100)
   *  squares.squareOfSum #=> 25502500
   */
  get squareOfSum() {
    return (((this.number + 1) * this.number) / 2) ** 2;
  }
}
