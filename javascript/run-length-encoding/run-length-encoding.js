export const encode = data => {
  return data.replace(/((.)\2*)/g, match => {
    if (match.length === 1) {
      return match[0];
    }

    return `${match.length}${match[0]}`;
  });
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
