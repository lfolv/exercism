class Anagram {
  private lettersOfWord: string

  constructor(private word: string) {
    const normalizedWord = Anagram.normalize(word)
    this.lettersOfWord = Anagram.sortLetters(normalizedWord)
  }

  static normalize(word: string) {
    return word.toLowerCase()
  }

  static sortLetters(word: string) {
    return word.split('').sort().join('')
  }

  matches(...words: string[]) {
    return words.filter(this.isAnagram.bind(this))
  }

  isAnagram(word: string) {
    const normalizedWord = Anagram.normalize(word)

    if (this.exactSameWord(normalizedWord)) {
      return false
    }

    return Anagram.sortLetters(normalizedWord) === this.lettersOfWord
  }

  exactSameWord(word: string) {
    return this.word === word
  }
}

export default Anagram