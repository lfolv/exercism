export const isIsogram = (sentence) => {
  const letters = {}

  return sentence
    .toUpperCase()
    .split('')
    .every(letter => {
      if (letter !== ' ' && letter !== '-' && letters[letter]) {
        return false
      }

      letters[letter] = true
      return true
    })
};
