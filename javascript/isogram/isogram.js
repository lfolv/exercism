const IGNORE_CHRS = /[^\s\-]/

export const isIsogram = (sentence) => {
  const letters = {}

  for (const letter of sentence.toUpperCase()) {
    if (letter.match(IGNORE_CHRS) && letters[letter]) {
      return false
    }

    letters[letter] = true
  }

  return true
};
