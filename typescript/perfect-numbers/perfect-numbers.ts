enum Category {
  Perfect = 'perfect',
  Abundant = 'abundant'
}

const factorsOf = (n: number): number[] => {
  const factors = []

  for (let i: number = 0; i <= n/2; i++) {
    if (n % i === 0) {
      factors.push(i)
    }
  }

  return factors
}

const aliquotSum = (n: number): number => 
  factorsOf(n).reduce((sum, value) => sum + value, 0)

export default class PerfectNumbers {
  static classify(n: number): Category {
    if (aliquotSum(n) === n) {
      return Category.Perfect
    }

    return Category.Abundant
  }
}
