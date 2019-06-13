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

  foldl(callback, value) {
    return value
  }

  foldr() {
  }

  reverse() {
  }
}
