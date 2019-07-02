const TO_CHECK_CHRS = /[^\s\-]/

export const isIsogram = (sentence) => {
  const letters = {}

  for (const letter of sentence.toUpperCase()) {
    if (letter.match(TO_CHECK_CHRS) && letters[letter]) {
      return false
    }

    letters[letter] = true
  }

  return true
};
