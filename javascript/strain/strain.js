export const keep = (collection, predicate) => {
  return collection.reduce((kept, value) => {
    if (predicate(value)) {
      return [...kept, value];
    }

    return kept;
  }, []);
};

export const discard = () => {
  throw new Error("Remove this statement and implement this function");
};
