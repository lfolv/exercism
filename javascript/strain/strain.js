export const keep = (collection, predicate) => {
  return collection.reduce((kept, value) => {
    if (predicate(value)) {
      return [...kept, value];
    }

    return kept;
  }, []);
};

export const discard = (collection, predicate) => {
  return keep(collection, value => !predicate(value))
};
