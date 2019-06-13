export class List {
  constructor(values = []) {
    this.values = values
  }

  append(other) {
    return new List([...this.values, ...other.values])
  }

  concat(other) {
    return new List([
      ...this.values,
      ...other.values.reduce((curr, value) =>
        [...curr, ...value.values],
      [])
    ])
  }

  filter() {
  }

  map() {
  }

  length() {
  }

  foldl(callback, initial) {
    let acc = initial
    for (const value of this.values) {
      acc = callback(acc, value)
    }
    return acc
  }

  foldr() {
  }

  reverse() {
  }
}
