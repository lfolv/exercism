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

  map(callback) {
    return new List(this.foldl((acc, value) =>
      [...acc, callback(value)], []))
  }

  length() {
    return this.foldl(acc => acc + 1, 0)
  }

  foldl(callback, curr, values = this.values) {
    if (values.length === 0) { return curr }

    const [head, ...tail] = values
    return this.foldl(callback, callback(curr, head), tail)
  }

  foldr(callback, initial) {
    return this
      .reverse()
      .foldl(callback, initial)
  }

  reverse() {
    return new List(this.foldl((acc, value) =>
      [value, ...acc], []))
  }
}
