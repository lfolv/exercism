export const convert = (digits, baseOrigin, baseDestiny) => {
  const number = convertToBase10(digits, baseOrigin);
  return convertFromBase10(number, baseDestiny);
};

const convertToBase10 = (digits, baseOrigin) =>
  digits
    .reverse()
    .reduce((sum, digit, index) => sum + digit * baseOrigin ** index, 0);

const convertFromBase10 = (number, baseDestiny) => {
  const digits = [];

  while (number > 0) {
    digits.unshift(number % baseDestiny);
    number = Math.floor(number / baseDestiny);
  }

  return digits;
};
