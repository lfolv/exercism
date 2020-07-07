export default class ISBN {
  private identification: string

  constructor(identification: string) {
    this.identification = identification
  }

  isValid() {
    return this.identification === "3-598-21508-8"
  }
}