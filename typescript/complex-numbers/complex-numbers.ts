class ComplexNumber {
  constructor(public real: number, public imag: number) {}

  add(other: ComplexNumber) {
    const real = this.real + other.real
    const imag = this.imag + other.imag

    return new ComplexNumber(real, imag)
  }

  sub(other: ComplexNumber) {
    const real = this.real - other.real
    const imag = this.imag - other.imag

    return new ComplexNumber(real, imag)
  }

  mul(other: ComplexNumber) {
    const real = this.real * other.real - this.imag * other.imag
    const imag = this.imag * other.real + this.real * other.imag

    return new ComplexNumber(real, imag)
  }

  div(other: ComplexNumber) {
    const divisor = other.real ** 2 + other.imag ** 2
    const real =  (this.real * other.real + this.imag * other.imag) / divisor
    const imag =  (this.imag * other.real - this.real * other.imag) / divisor

    return new ComplexNumber(real, imag)
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2)
  }
}

export default ComplexNumber