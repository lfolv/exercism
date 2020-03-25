export default class Series {
  public digits: number[]

  constructor(stringOfDigits: string) {
    this.digits = stringOfDigits
      .split('')
      .map(digit => Number(digit))
  }

  slices(size: number) {
    if (size > this.digits.length) {
      throw new Error()
    }

    const currentSlices = []

    for (let i = 0; i <= this.digits.length - size; i++) {
      const slice = this.digits.slice(i, i + size)
      currentSlices.push(slice)
    }

    return currentSlices
  }
}