enum Category {
  Perfect = "perfect",
  Abundant = "abundant",
  Deficient = "deficient"
}

const factorsOf = (n: number): number[] => {
  const factors = [];

  for (let i: number = 0; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};

const calcAliquotSum = (n: number): number =>
  factorsOf(n).reduce((sum, value) => sum + value, 0);

export default class PerfectNumbers {
  static classify(n: number): Category {
    if (n <= 0) {
      throw new Error("Classification is only possible for natural numbers.");
    }

    const aliquotSum = calcAliquotSum(n);

    if (aliquotSum === n) {
      return Category.Perfect;
    }

    if (aliquotSum > n) {
      return Category.Abundant;
    }

    return Category.Deficient;
  }
}
