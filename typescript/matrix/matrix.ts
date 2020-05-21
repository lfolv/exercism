class Matrix {
    constructor(private str: string) { }

    get rows() {
        return [[Number.parseInt(this.str)]]
    }

    get columns() {
        return [[Number.parseInt(this.str)]]
    }
}

export default Matrix
