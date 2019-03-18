export class Matrix {
  constructor (str) {
    this.str = str
  }

  get rows () {
    return this.str.split('\n').map(line => {
      return line.split(' ').map(value => Number.parseInt(value, 10))
    })
  }

  get columns () {
    const transpose = []
    for (let i = 0; i < this.rows[0].length; i++) {
      transpose.push([])
    }

    for (let line of this.rows) {
      for (let i = 0; i < line.length; i++) {
        transpose[i].push(line[i])
      }
    }
    return transpose
  }
}
