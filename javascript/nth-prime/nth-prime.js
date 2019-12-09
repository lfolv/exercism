export class Prime {
  nth(n) {
    let currentPrimeIndex = 0;

    while (currentPrimeIndex <= n) {
      currentPrimeIndex++;
    }

    return currentPrimeIndex;
  }
}
