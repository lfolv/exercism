export const findAnagrams = (word, possibleAnagrams) =>
  possibleAnagrams
    .filter(possibleAnagram => isAnagram(word, possibleAnagram))

const isAnagram = (word, possibleAnagram) => {
  const sortedWord = sortWord(word)
  const sortedPossibleAnagram = sortWord(possibleAnagram)

  return sortedWord === sortedPossibleAnagram
}

const sortWord = (word) =>
  word
    .split('')
    .sort()
    .join('')
