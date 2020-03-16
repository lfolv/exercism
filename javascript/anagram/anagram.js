export const findAnagrams = (word, possible_anagrams) => {
  const sortedWord = sortWord(word)

  return possible_anagrams
    .filter(possible_anagram => sortedWord === sortWord(possible_anagram))
}

const sortWord = (word) =>
  word
    .split('')
    .sort()
    .join('')
