export class BinarySearch {
  constructor(array) {
    if (isSorted(array)) {
      this._array = array;
    }
  }

  get array() {
    return this._array;
  }

  indexOf(value) {
    let left = 0;
    let right = this.array.length - 1;

    while (left < right) {
      let middle = Math.floor(right / 2) + left;

      if (this.array[middle] === value) {
        return middle;
      } else if (this.array[middle] < value) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1;
  }
}

function isSorted(array) {
  let previus = -Infinity;

  for (const current of array) {
    if (previus > current) {
      return false;
    }

    previus = current;
  }

  return true;
}
