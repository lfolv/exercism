class Anagram {
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
    const normalizedWord = Anagram.normalize(this.word)
    const normalizedPossibleAnagram = Anagram.normalize(possibleAnagram)

    if (normalizedWord === normalizedPossibleAnagram) {
      return false
    }

    const sortedWord = Anagram.sortLettersOf(normalizedWord)
    const sortedPossibleAnagram = Anagram.sortLettersOf(normalizedPossibleAnagram)

    return sortedWord === sortedPossibleAnagram
  }
}

export default Anagram