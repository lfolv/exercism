function isArmstrongNumber(n: number): boolean {
  return n === armstrongNumberSum(n)
}

function armstrongNumberSum(n: number): number {
  const digits = n.toString().split('').map((n) => Number.parseInt(n, 10))
  return digits.reduce((prev: number, curr: number, _, ds: number[]): number => {
    return prev + (curr ** ds.length)
  }, 0)
}

export default {
  isArmstrongNumber
}
