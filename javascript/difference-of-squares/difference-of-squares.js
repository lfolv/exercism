/**
 * Provides helpful methods to handle with squares
 * numbers calculations.
 */
export class Squares {
  /**
   * Create a new Squares object
   *
   * @param {number} number - first N natural numbers to calculate
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * Caklculate the difference between the square of sum and the sum
   * of squres of the first N natual numbers
   *
   * @return [number] the difference of squares
   *
   * @example
   *  const squares = new Square(100)
   *  squares.difference #=> 25164150
   */
  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }

  /**
   * Calculate the square of the sum of the first N natual numbers.
   * The square of the sum of the first ten natural number is
   * (1 + 2 + ... + 10) ** 2 = 55 ** 2 = 3025
   *
   * @return [number] square of the sum
   *
   * @example
   *  const squares = new Square(100)
   *  squares.squareOfSum #=> 25502500
   */
  get squareOfSum() {
    return (((this.number + 1) * this.number) / 2) ** 2;
  }

  /**
   * Calculate the sum of the squares of the first N natural numbers
   * The sum of the squares of the first ten natual numbers is
   * 1 ** 2 + 2 ** 2 + ... 10 ** 2 = 385
   *
   * @return [number] sum of the squares
   *
   * @example
   *  const squares = new Square(100)
   *  squares.sumOfSquares #=> 338350
   */
  get sumOfSquares() {
    return ((this.number + 1) * this.number * (2 * this.number + 1)) / 6;
  }
}
