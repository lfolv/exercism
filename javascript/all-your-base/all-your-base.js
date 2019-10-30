export const convert = (digits, baseOrigin, base_to_convert) => {
  return convertToBase10(digits, baseOrigin)
    .toString()
    .split("")
    .map(digit => Number(digit));
};

const convertToBase10 = (digits, baseOrigin) =>
  digits
    .reverse()
    .reduce((sum, digit, index) => sum + digit * baseOrigin ** index, 0);
