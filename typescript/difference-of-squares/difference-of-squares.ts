class Squares {
  public squareOfSum: number;
  public sumOfSquares: number;
  public difference: number;

  constructor(n: number) {
    let squareOfSum: number = 0;
    let sumOfSquares: number = 0;

    for (let i = 0; i <= n; i++) {
      squareOfSum += i;
      sumOfSquares += i ** 2;
    }

    this.sumOfSquares = sumOfSquares;
    this.squareOfSum = squareOfSum ** 2;
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
