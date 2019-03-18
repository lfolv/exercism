export class Matrix {
  constructor (str) {
    this.rows = strToMatrixOfNumbers(str)
    this.columns = transpose(this.rows)
  }
}

function strToMatrixOfNumbers (str) {
  return str.split('\n').map(line => {
    return line.split(' ').map(value => Number.parseInt(value, 10))
  })
}

function transpose (matrix) {
  const transpose = []
  for (let i = 0; i < matrix.length; i++) {
    transpose.push([])
  }

  for (let line of matrix) {
    for (let i = 0; i < line.length; i++) {
      transpose[i].push(line[i])
    }
  }
  return transpose
}
