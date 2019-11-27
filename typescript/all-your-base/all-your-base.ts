class Converter {
  convert(digits: number[], inputBase: number, outputBase: number): number[] {
    if (this.isInvalidBase(inputBase)) {
      throw new Error("Wrong input base");
    }

    if (this.isInvalidBase(outputBase)) {
      throw new Error("Wrong output base");
    }

    if (digits.length === 0 || this.hasInvalidDigit(digits, inputBase)) {
      throw new Error("Input has wrong format");
    }

    const number = this.convertToBase10(digits, inputBase);
    const convertedDigits = this.convertFromBase10(number, outputBase);

    return convertedDigits.length === 0 ? [0] : convertedDigits;
  }

  isInvalidBase(base: number): boolean {
    return base <= 1 || !Number.isInteger(base);
  }

  hasInvalidDigit(digits: number[], base: number): boolean {
    return (
      (digits.length > 1 && digits[0] === 0) ||
      digits.some(digit => digit < 0 || digit >= base)
    );
  }

  convertToBase10(digits: number[], inputBase: number) {
    return digits
      .reverse()
      .reduce(
        (sum: number, digit: number, index: number) =>
          sum + digit * inputBase ** index,
        0
      );
  }

  convertFromBase10(number: number, outputBase: number) {
    const digits = [];

    while (number > 0) {
      digits.unshift(number % outputBase);
      number = Math.floor(number / outputBase);
    }

    return digits;
  }
}

export default Converter;
