class Squares {
  constructor(private n: number) {}

  get squareOfSum() {
    let currentSquareOfSum = 0;

    for (let i = 0; i <= this.n; i++) {
      currentSquareOfSum += i;
    }

    return currentSquareOfSum ** 2;
  }

  get sumOfSquares() {
    let currentSumOfSquares = 0;

    for (let i = 0; i <= this.n; i++) {
      currentSumOfSquares += i ** 2;
    }

    return currentSumOfSquares;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
