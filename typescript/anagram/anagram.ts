class Anagram {
  static sameWord(word: string, other: string) {
    const normalizedWord = Anagram.normalize(word)
    const normalizedOther = Anagram.normalize(other)

    const sortedWord = Anagram.sortLettersOf(normalizedWord)
    const sortedOther = Anagram.sortLettersOf(normalizedOther)

    return sortedWord === sortedOther
  }

  static normalize(word: string) {
    return word.toLowerCase()
  }

  static sortLettersOf(word: string) {
    return word.split('').sort().join('')
  }

  constructor(private word: string) { }

  matches(...possibleAnagrams: string[]) {
    return possibleAnagrams.filter(this.isAnagram.bind(this))
  }

  isAnagram(possibleAnagram: string) {
    if (this.word.toLowerCase() === possibleAnagram.toLowerCase()) {
      return false
    }

    return Anagram.sameWord(this.word, possibleAnagram)
  }
}

export default Anagram