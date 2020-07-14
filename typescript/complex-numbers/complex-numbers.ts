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
}

export default ComplexNumber