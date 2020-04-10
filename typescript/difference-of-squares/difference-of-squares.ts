function range(start: number, end: number, step = 1) {
  const result = [];

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

class Squares {
  constructor(private n: number) {}

  get squareOfSum() {
    return range(0, this.n).reduce((acc, value) => acc + value, 0) ** 2;
  }

  get sumOfSquares() {
    return range(0, this.n).reduce((acc, value) => acc + value ** 2, 0);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
