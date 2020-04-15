class FlattenArray {
  static flatten<T>(list: T[]): T[] {
    return list.reduce((acc, value) => {
      if (Array.isArray(value)) {
        return [...acc, ...this.flatten(value)];
      }

      if (value === undefined || value === null) {
        return acc;
      }

      return [...acc, value];
    }, []);
  }
}

export default FlattenArray;
