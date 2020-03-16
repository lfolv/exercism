export const findAnagrams = (word, possibleAnagrams) =>
  possibleAnagrams
    .filter(possibleAnagram => isAnagram(word, possibleAnagram))

const isAnagram = (word, possibleAnagram) => {
  const wordNomalized = normalize(word)
  const possibleAnagramNormalized = normalize(possibleAnagram)

  if (wordNomalized === possibleAnagramNormalized) {
    return false
  }

  const sortedWord = sortWord(wordNomalized)
  const sortedPossibleAnagram = sortWord(possibleAnagramNormalized)

  return sortedWord === sortedPossibleAnagram
}

const normalize = word =>
  word.toUpperCase()

const sortWord = (word) =>
  word
    .split('')
    .sort()
    .join('')
