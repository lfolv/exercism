export const isIsogram = (sentence) => {
  const letters = {}
  for (const letter of sentence) {
    if (letters[letter]) {
      return false
    }
    letters[letter] = true
  }
  return true
};
