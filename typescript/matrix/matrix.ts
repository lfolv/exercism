class Matrix {
    constructor(private str: string) { }

    static parse(str: string) {
        return str.split('\n').map(Matrix.parseLine)
    }

    static parseLine(line: string) {
        return line.split(' ').map(Matrix.parseValue)
    }

    static parseValue(value: string) {
        return Number.parseInt(value, 10)
    }

    get rows() {
        return Matrix.parse(this.str)
    }

    get columns() {
        return transpose(this.rows)
    }
}

function transpose<T>(matrix: T[][]) {
    const transposed: T[][] = []

    for (let i = 0; i < matrix.length; i++) {
        transposed.push([])
    }

    for (let line of matrix) {
        for (let i = 0; i < line.length; i++) {
            transposed[i].push(line[i])
        }
    }

    return transposed
}

export default Matrix
