export const parse = (phrase) => {
  return phrase
    .split(' ')
    .map(word => word[0])
    .join('')
};
