//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearch {
  constructor(array) {
    if (isSorted(array)) {
      this._array = array;
    }
  }

  get array() {
    return this._array;
  }

  indexOf() {
    throw new Error("Remove this statement and implement this function");
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
