export class BinarySearchTree {
  constructor(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  insert(data) {
    const node = new BinarySearchTree(data);

    if (data <= this.data) {
      this._left = node;
    } else {
      this._right = node;
    }
  }
}
