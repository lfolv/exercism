class Anagram {
  private word: string

  constructor(word: string) {
    this.word = word.toLowerCase()
  }

  static sortLetters(word: string) {
    return word.toLowerCase().split('').sort().join('')
  }

  matches(...words: string[]) {
    return words.filter(this.isAnagram.bind(this))
  }

  isAnagram(word: string) {
    if (this.exactSameWord(word)) {
      return false
    }

    return Anagram.sortLetters(word) === Anagram.sortLetters(this.word)
  }

  exactSameWord(word: string) {
    return this.word === word.toLowerCase()
  }
}

export default Anagram