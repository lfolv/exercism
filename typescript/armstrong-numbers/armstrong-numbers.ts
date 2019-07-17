function isArmstrongNumber(n: number): boolean {
  const digits = n.toString().split('').map((n) => Number.parseInt(n, 10))
  const sum = digits.reduce((prev: number, curr: number, _, ds: number[]): number => {
    return prev + (curr ** ds.length)
  }, 0)
  return n === sum
}

export default {
  isArmstrongNumber
}
