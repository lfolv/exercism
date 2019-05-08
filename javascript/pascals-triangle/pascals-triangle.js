export class Triangle {
  constructor(numberOfRows) {
    this.numberOfRows = numberOfRows;
  }

  get rows() {
    let lines = [];
    for (let n = 0; n < this.numberOfRows; n++) {
      lines.push(this._getLine(n));
    }
    return lines;
  }

  _getLine(n) {
    let line = [1];
    for (let k = 0; k < n; k++) {
      line.push((line[k] * (n - k)) / (k + 1));
    }
    return line;
  }
}
