export const convert = (number) => {
  if (number % 3 === 0) {
    return 'Pling'
  }

  if (number % 5 === 0) {
    return 'Plang'
  }

  return '1'
};
