export class Prime {
  constructor() {
    this.primes = [2];
  }

  nth(n) {
    if (n <= 0) {
      throw new Error("Prime is not possible");
    }

    while (this.primes.length < n) {
      this.calculateNextPrime();
    }

    return this.primes[n - 1];
  }

  calculateNextPrime() {
    let value = this.lastCalculatePrime;

    while (true) {
      let isPrime = true;
      value++;

      for (const prime of this.primes) {
        if (value % prime === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        this.primes.push(value);
        break;
      }
    }
  }

  get lastCalculatePrime() {
    return this.primes[this.primes.length - 1];
  }
}
