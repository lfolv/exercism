function SumOfMultiples([ x, y ]: number[]) {
  return {
    to(limit: number): number {
      let sum: number = 0

      for (let n = 1; n < limit; n++) {
        if (n % x === 0 || n % y === 0) {
          sum += n
        }
      }

      return sum
    }
  }
}

export default SumOfMultiples