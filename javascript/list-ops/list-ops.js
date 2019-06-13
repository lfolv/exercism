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
      ...other.foldl((curr, value) =>
        [...curr, ...value.values],
      [])
    ])
  }

  filter(callback) {
    return new List(this.foldl((acc, value) =>
      callback(value) ? [...acc, value] : acc, []))
  }

  map() {
  }

  length() {
    return 0
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
