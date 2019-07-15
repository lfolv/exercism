export class Luhn {
  constructor(number) {
    this._number = number.replace(/\s/g, '');
  }

  get valid() {
    if (this._number.length === 1) {
      return false;
    }

    let luhnSum = 0
    const digits = this.number.replace(/\s/g, '').split('')

    for (let i = 0; i < digits.length; i++) {
      let d = Number.parseInt(digits[i], 10)

      if (Number.isNaN(d)) {
        return false
      }

      const luhnIndex = digits.length - i - 1

      if (luhnIndex % 2 !== 0) {
        d = d * 2
        if (d > 9) {
          d = d - 9
        }
      }

      luhnSum += d
    }

    return luhnSum % 10 === 0
  }
}

