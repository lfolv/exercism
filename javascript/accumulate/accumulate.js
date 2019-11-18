export const accumulate = (collection, accumulator) => {
  const acc = []

  for (const value of collection) {
    acc.push(accumulator(value))
  }

  return acc
};
