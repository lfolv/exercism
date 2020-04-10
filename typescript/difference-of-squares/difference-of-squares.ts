function range(start: number, end: number, step = 1) {
  const result = [];

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

function sum(array: number[]) {
  return array.reduce((acc, value) => acc + value, 0);
}

class Squares {
  constructor(private n: number) {}

  get squareOfSum() {
    const values = range(0, this.n);

    return sum(values) ** 2;
  }

  get sumOfSquares() {
    const values = range(0, this.n).map((value) => value ** 2);

    return sum(values);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
