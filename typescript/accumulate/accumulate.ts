function accumulate<T, K>(collection: T[], operate: (value: T) => K) {
  const result = [];

  for (const value of collection) {
    result.push(operate(value));
  }

  return result;
}

export default accumulate;
