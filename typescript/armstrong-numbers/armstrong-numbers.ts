function isArmstrongNumber(n: number): boolean {
  return n === armstrongNumberSum(n)
}

const armstrongNumberSum = (n: number): number =>
  getDigits(n)
    .reduce((prev: number, curr: number, _, ds: number[]): number =>
      prev + (curr ** ds.length)
    , 0)

 const getDigits = (n: number): number[] =>
  n.toString().split('').map((digit) => Number.parseInt(digit))

export default {
  isArmstrongNumber
}
