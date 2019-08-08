const LETTERS = [...'abcdefghijklmnopqrstuvwxyz']

export default class Pangran {
  private sentence: string

  constructor(sentence: string) {
    this.sentence = sentence
  }

  isPangram(): boolean {
    const sentence = this.sentence.toLowerCase()

    for (let letter of LETTERS) {
      if (!sentence.includes(letter)) {
        return false
      }
    }

    return true
  }
}