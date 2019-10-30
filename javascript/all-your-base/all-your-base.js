export const convert = (digits, baseOrigin, baseDestiny) => {
  if (isInvalidDigits(digits)) {
    throw new Error("Input has wrong format");
  }

  const number = convertToBase10(digits, baseOrigin);
  const convertedDigits = convertFromBase10(number, baseDestiny);

  return convertedDigits.length === 0 ? [0] : convertedDigits
};

const isInvalidDigits = digits => {
  if (digits.length === 0) {
    return true
  }

  if (digits.length > 1 && digits[0] === 0) {
    return true
  }

  if (digits.some(digit => digit < 0)) {
    return true
  }

  return false
}

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
