export const convert = (digits, base_origin, base_to_convert) => {
  return digits
    .reverse()
    .reduce((sum, digit, index) => {
      return sum + (digit * (base_origin ** index))  
    }, 0)
    .toString()
    .split('')
    .map(digit => Number(digit))
};
