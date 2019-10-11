function SumOfMultiples([ x, y ]: number[]) {
  return {
    to(limit: number): number {
      let sum: number = 0

      for (let number = 1; number <= limit; number++) {
        if (number % x === 0 && number % y === 0) {
          sum += number
        }
      }

      return sum
    }
  }
}

export default SumOfMultiples