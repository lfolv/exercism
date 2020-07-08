export default class ISBN {
  private identification: string

  constructor(identification: string) {
    this.identification = identification.replace(/-/g, '')
  }

  isValid() {
    let sum = 0

    for (let i = 0; i < 9; i++) {
      sum += Number(this.identification[i]) * (10 - i)
    }

    if (this.identification[9] === 'X') {
      sum += 10
    } else {
      sum += Number(this.identification[9])
    }

    return sum % 11 === 0
  }
}