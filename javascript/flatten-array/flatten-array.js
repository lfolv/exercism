export const flatten = list => {
  return list.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return [...acc, ...flatten(value)];
    }

    if (value === undefined || value === null) {
      return acc;
    }

    return [...acc, value];
  }, []);
};
