const SEPARATOR = /[\s-_]+/

export const parse = phrase => 
  phrase
    .split(SEPARATOR)
    .map(wordToAcronym)
    .join('')

const wordToAcronym = word => word[0].toUpperCase()
