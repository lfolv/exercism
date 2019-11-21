enum Category {
  Perfect = 'perfect',
  Abundant = 'abundant'
}

function aliquotSum(n: number): number {
  let sum: number = 0

  for (let i: number = 0; i <= n/2; i++) {
    if (n % i === 0) {
      sum += i
    }
  }

  return sum
}

export default class PerfectNumbers {
  static classify(n: number): Category {
    if (aliquotSum(n) === n) {
      return Category.Perfect
    }

    return Category.Abundant
  }
}
