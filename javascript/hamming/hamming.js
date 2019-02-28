export const compute = (left, right) => {
  if (left.length !== right.length) {
    throw new Error("left and right strands must be of equal length");
  }

  let differents = 0;
  for (let i = 0; i < left.length; i += 1) {
    if (left.charAt(i) !== right.charAt(i)) {
      differents += 1;
    }
  }
  return differents;
};
