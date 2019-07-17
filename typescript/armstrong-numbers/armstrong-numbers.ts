export default class ArmstrongNumbers {
  static isArmstrongNumber(n: number): boolean {
    return n === ArmstrongNumbers.armstrongNumberSum(n);
  }

  private static armstrongNumberSum(n: number): number {
    return ArmstrongNumbers.getDigits(n).reduce(ArmstrongNumbers.armstrongNumberSumReducer, 0);
  }

  private static getDigits(n: number): number[] {
    return n
      .toString()
      .split("")
      .map(digit => Number.parseInt(digit));
  }

  private static armstrongNumberSumReducer (
    sum: number,
    value: number,
    _: number,
    digits: number[]
  ): number {
    return sum + value ** digits.length;
  }
}
