class Anagram {
  constructor(private word: string) { }

  matches(...possibleAnagrams: string[]) {
    return possibleAnagrams.filter(possibleAnagram => this.isAnagram(possibleAnagram))
  }

  isAnagram(possibleAnagram: string) {
    const normalizedWord = this.word.toLowerCase()
    const normalizedPossibleAnagram = possibleAnagram.toLowerCase()

    if (normalizedWord === normalizedPossibleAnagram) {
      return false
    }

    const sortedWord = normalizedWord.split('').sort().join('')
    const sortedPossibleAnagram = normalizedPossibleAnagram.split('').sort().join('')

    return sortedWord === sortedPossibleAnagram
  }
}

export default Anagram