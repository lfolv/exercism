export const accumulate = (collection, accumulator) =>
  reduce(collection, (acc, value) => [...acc, accumulator(value)], []);

const reduce = (collection, callback, acc, index = 0) =>
  index >= collection.length
    ? acc
    : reduce(collection, callback, callback(acc, collection[index]), index + 1);
