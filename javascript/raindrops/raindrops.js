export const convert = (number) => {
  if (number % 3 === 0) {
    return 'Pling'
  }

  if (number % 5 === 0) {
    return 'Plang'
  }

  if (number % 7 === 0) {
    return 'Plong'
  }

  return '1'
};
