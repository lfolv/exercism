export class BinarySearchTree {
  constructor(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  get right() {
    throw new Error("Remove this statement and implement this function");
  }

  get left() {
    return this._left;
  }

  insert(data) {
    this._left = new BinarySearchTree(data);
  }
}
