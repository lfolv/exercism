function isArmstrongNumber(n: number): boolean {
  return n === armstrongNumberSum(n);
}

const armstrongNumberSum = (n: number): number =>
  getDigits(n).reduce(armstrongNumberSumReducer, 0);

const getDigits = (n: number): number[] =>
  n
    .toString()
    .split("")
    .map(digit => Number.parseInt(digit));

const armstrongNumberSumReducer = (
  sum: number,
  value: number,
  _: number,
  digits: number[]
): number => sum + value ** digits.length;

export default {
  isArmstrongNumber
};
