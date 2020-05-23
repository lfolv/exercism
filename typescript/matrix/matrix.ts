const LINE_DELIMITER = '\n'
const COLUMN_DELIMITER = ' '

class Matrix {
    constructor(private matrix_representation: string) { }

    static parse(matrix_representation: string) {
        return matrix_representation.split(LINE_DELIMITER).map(Matrix.parseLine)
    }

    static parseLine(line: string) {
        return line.split(COLUMN_DELIMITER).map(Matrix.parseValue)
    }

    static parseValue(value: string) {
        return Number(value)
    }

    get rows() {
        return Matrix.parse(this.matrix_representation)
    }

    get columns() {
        return transpose(this.rows)
    }
}

function transpose<T>(matrix: T[][]) {
    const transposed: T[][] = []

    for (let line of matrix) {
        for (let i = 0; i < line.length; i++) {
            transposed.push([])
            transposed[i].push(line[i])
        }
    }

    return transposed
}

export default Matrix
