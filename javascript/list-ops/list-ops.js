export class List {
  constructor(values = []) {
    this.values = values
  }

  append(other) {
    return new List([...this.values, ...other.values])
  }

  concat(other) {
    let newValues = [...this.values]
    for (const list of other.values) {
      newValues = [...newValues, ...list.values]
    }
    return new List(newValues)
  }

  filter() {
  }

  map() {
  }

  length() {
  }

  foldl() {
  }

  foldr() {
  }

  reverse() {
  }
}
