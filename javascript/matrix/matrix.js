export class Matrix {
  constructor (str) {
    this.str = str
  }

  get rows () {
    return this.str.split('\n').map(line => {
      return line.split(' ').map(value => Number.parseInt(value, 10))
    })
  }
}
