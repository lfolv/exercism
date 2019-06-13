export class List {
  constructor(values = []) {
    this.values = values
  }

  append(other) {
    return new List([...this.values, ...other.values])
  }

  concat() {
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
