export class List {
  constructor(values = []) {
    this.values = values
  }

  append(other) {
    return new List([...this.values, ...other.values])
  }

  concat() {
    return new List()
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
