export const isIsogram = (sentence) => {
  const letters = {}

  for (const letter of sentence.toUpperCase()) {
    if (letter == '-') {
      continue
    }

    if (letters[letter]) {
      return false
    }
    letters[letter] = true
  }

  return true
};
