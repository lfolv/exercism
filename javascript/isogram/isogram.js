const IGNORE_CHRS = /-|\s/g

export const isIsogram = (sentence) =>
  sentence
    .toUpperCase()
    .replace(IGNORE_CHRS, '')
    .split('')
    .every((chr, index, chrs) => chrs.indexOf(chr) === index)
