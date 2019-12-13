export const primeFactors = number => {
  const factors = [];

  while (number > 1) {
    for (const prime of primeNumbers()) {
      if (number % prime === 0) {
        number /= prime;
        factors.push(prime);
        break;
      }
    }
  }

  return factors;
};

function* primeNumbers() {
  const primes = [];
  let current = 2;

  while (true) {
    primes.push(current);
    yield current;

    let isPrime = false

    while (!isPrime) {
      current++;
      isPrime = true;

      for (const prime of primes) {
        if (current % prime === 0) {
          isPrime = false;
          break;
        }
      }
    }
  }
}
