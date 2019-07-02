export const isIsogram = (sentence) => {
  const letters = {}

  return sentence
    .toUpperCase()
    .split('')
    .every(letter =>
      !(letter !== ' ' &&
        letter !== '-' &&
        (letters[letter] || !(letters[letter] = true)))
    )
};
