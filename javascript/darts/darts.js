export const solve = (x, y) => {
  const distance = Math.sqrt(x ** 2 + y ** 2);

  if (distance <= 5) {
    return 5;
  }

  if (distance <= 10) {
    return 1;
  }

  return 0;
};
