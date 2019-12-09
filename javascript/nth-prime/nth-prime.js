export class Prime {
  nth(n) {
    let index = 0;
    let value = 1;

    while (index < n) {
      value++;

      if (this.isPrime(value)) {
        index++;
      }
    }

    return value;
  }

  isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }
}
