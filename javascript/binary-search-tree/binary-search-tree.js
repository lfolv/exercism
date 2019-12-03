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
    if (data <= this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this._left = new BinarySearchTree(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this._right = new BinarySearchTree(data);
      }
    }
  }

  each(callback) {
    if (this.left) {
      this.left.each(callback);
    }

    callback(this.data);

    if (this.right) {
      this.right.each(callback);
    }
  }
}
