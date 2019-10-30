export const convert = (digits, baseOrigin, baseDestiny) => {
  if (digits.length === 1 && digits[0] === 0) {
    return [0]
  }

  if (digits[0] === 0) {
    throw new Error("Input has wrong format");
  }

  const number = convertToBase10(digits, baseOrigin);
  const convertedDigits = convertFromBase10(number, baseDestiny);

  if (convertedDigits.length === 0) {
    throw new Error("Input has wrong format");
  }

  return convertedDigits
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
