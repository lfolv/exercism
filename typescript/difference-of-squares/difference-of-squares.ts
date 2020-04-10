class Squares {
  constructor(private n: number) {}

  get squareOfSum() {
    return [...range(0, this.n)].sum() ** 2;
  }

  get sumOfSquares() {
    return [...range(0, this.n)].map((value) => value ** 2).sum();
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

function* range(start: number, end: number, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

declare global {
  interface Array<T> {
    sum(): number;
  }
}

Array.prototype.sum = function <T>(): T {
  return this.reduce((acc, value) => acc + value, 0);
};

export default Squares;
