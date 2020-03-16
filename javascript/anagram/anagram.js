export const findAnagrams = (word, words) => {
  const sortedWord = word.split('').sort().join('')

  return words
    .filter(currentWord => sortedWord === currentWord.split('').sort().join(''))
}
