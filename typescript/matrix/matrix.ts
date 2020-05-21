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
        return [[Number.parseInt(this.str)]]
    }
}

export default Matrix
