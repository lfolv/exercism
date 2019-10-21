function SumOfMultiples(numbers: number[]) {
  return {
    to(stop: number): number {
      let sum: number = 0

      for (const n of range(1, stop)) {
        if (numbers.some(x => n % x === 0)) {
          sum += n
        }
      }

      return sum
    }
  }
}

function* range(start: number, stop: number) {
  for (let i = start; i < stop; i++) {
    yield i
  }
}

export default SumOfMultiples