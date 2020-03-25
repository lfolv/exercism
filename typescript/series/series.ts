export default class Series {
  public digits: number[]

  constructor(stringOfDigits: string) {
    this.digits = stringOfDigits
      .split('')
      .map(digit => Number(digit))
  }

  slices(size: number) {
    return this.digits.slice(0, size)
  }
}