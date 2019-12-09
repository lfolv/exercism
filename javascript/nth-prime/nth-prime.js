export class Prime {
  nth(n) {
    if (n <= 0) {
      throw new Error("Prime is not possible");
    }

    const primes = [];
    let value = 2;

    while (primes.length < n) {
      let isPrime = true;

      for (let prime of primes) {
        if (value % prime === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(value);
      }

      value++;
    }

    return primes[n - 1];
  }
}
