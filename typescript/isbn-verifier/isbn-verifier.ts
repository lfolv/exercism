const DIVISOR = /-/g
const LENGTH = 10
const LAST_DIGIT_INDEX = 9
const X_VALUE = 10

export default class ISBN {
  private identification: string

  constructor(identification: string) {
    this.identification = identification.replace(DIVISOR, '')
  }

  isValid() {
    if (this.identification.length !== LENGTH) {
      return false
    }

    return this.sum() % 11 === 0
  }

  private sum() {
    let sum = 0

    for (let i = 0; i < LENGTH; i++) {
      sum += this.valueFromIndex(i)
    }

    return sum
  }

  private valueFromIndex(index: number) {
    if (index === LAST_DIGIT_INDEX && this.identification[LAST_DIGIT_INDEX] === 'X') {
      return X_VALUE
    }

    return Number(this.identification[index]) * (LENGTH - index)
  }
}