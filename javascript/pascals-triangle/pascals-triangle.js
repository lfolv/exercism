export class Triangle {
  constructor(numberOfRows) {
    this.numberOfRows = numberOfRows;
  }

  get rows() {
    let lines = [];
    for (let n = 0; n < this.numberOfRows; n++) {
      lines.push(getLine(n));
    }
    return lines;
  }

  get lastRow() {
    return getLine(this.numberOfRows - 1);
  }
}

const getLine = (n) => {
  let line = [1];
  for (let k = 0; k < n; k++) {
    line.push((line[k] * (n - k)) / (k + 1));
  }
  return line;
}
