const LETTERS = [...'abcdefghijklmnopqrstuvwxyz']

export default class Pangran {
  private sentence: string

  constructor(sentence: string) {
    this.sentence = sentence.toLowerCase()
  }

  isPangram(): boolean {
    return LETTERS
      .every(letter => this.sentence.includes(letter))
  }
}