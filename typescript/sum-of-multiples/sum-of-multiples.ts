function SumOfMultiples(numbers: number[]) {
  return {
    to(limit: number): number {
      let sum: number = 0

      for (let n = 1; n < limit; n++) {
        if (numbers.some(x => n % x === 0)) {
          sum += n
        }
      }

      return sum
    }
  }
}

export default SumOfMultiples