export const flatten = list => {
  return list.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return [...acc, ...flatten(value)];
    }

    if (value === undefined) {
      return acc;
    }

    return [...acc, value];
  }, []);
};
