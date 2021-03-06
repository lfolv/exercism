export const convert = (digits, inputBase = 0, outputBase) => {
  if (isInvalidBase(inputBase)) {
    throw new Error("Wrong input base")
  }

  if (isInvalidBase(outputBase)) {
    throw new Error("Wrong output base")
  }
  
  if (digits.length === 0 || hasInvalidDigit(digits, inputBase)) {
    throw new Error("Input has wrong format");
  }

  const number = convertToBase10(digits, inputBase);
  const convertedDigits = convertFromBase10(number, outputBase);

  return convertedDigits.length === 0 ? [0] : convertedDigits
};

const isInvalidBase = base =>
  base <= 1 || !Number.isInteger(base)

const hasInvalidDigit = (digits, base) => {
  if (digits.length > 1 && digits[0] === 0) {
    return true
  }

  if (digits.some(digit => digit < 0 || digit >= base)) {
    return true
  }

  return false
}

const convertToBase10 = (digits, inputBase) =>
  digits
    .reverse()
    .reduce((sum, digit, index) => sum + digit * inputBase ** index, 0);

const convertFromBase10 = (number, outputBase) => {
  const digits = [];

  while (number > 0) {
    digits.unshift(number % outputBase);
    number = Math.floor(number / outputBase);
  }

  return digits;
};
