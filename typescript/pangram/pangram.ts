const LETTERS = [...'abcdefghijklmnopqrstuvwxyz']

export default class Pangran {
  private sentence: string

  constructor(sentence: string) {
    this.sentence = sentence
  }

  isPangram(): boolean {
    for (let letter of LETTERS) {
      if (!this.sentence.includes(letter)) {
        return false
      }
    }

    return true
  }
}