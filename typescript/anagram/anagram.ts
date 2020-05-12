class Anagram {
  static normalize(word: string) {
    return word.toLowerCase()
  }

  static sortLettersOf(word: string) {
    return word.split('').sort().join('')
  }

  static sameWord(word: string, other: string) {
    return word === other
  }

  constructor(private word: string) { }

  matches(...possibleAnagrams: string[]) {
    return possibleAnagrams.filter(this.isAnagram.bind(this))
  }

  isAnagram(possibleAnagram: string) {
    const normalizedWord = Anagram.normalize(this.word)
    const normalizedPossibleAnagram = Anagram.normalize(possibleAnagram)

    if (Anagram.sameWord(normalizedWord, normalizedPossibleAnagram)) {
      return false
    }

    const sortedWord = Anagram.sortLettersOf(normalizedWord)
    const sortedPossibleAnagram = Anagram.sortLettersOf(normalizedPossibleAnagram)

    return Anagram.sameWord(sortedWord, sortedPossibleAnagram)
  }
}

export default Anagram