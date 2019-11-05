export const flatten = list => {
  let flattedList = [];

  for (const value of list) {
    if (Array.isArray(value)) {
      flattedList = [...flattedList, ...flatten(value)];
    } else if (value !== undefined) {
      flattedList = [...flattedList, value];
    }
  }

  return flattedList;
};
