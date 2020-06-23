const NUMBER = /\d/
const LETTER = /[a-zA-Z]/

export const encode = message =>
  message
    .replace(/./g, transposeChr)
    .match(/.{1,5}/g)
    .join(" ")

const transposeChr = chr => {
  if (chr.match(NUMBER)) {
    return chr
  }

  if (chr.match(LETTER)) {
    const lowerChr = chr.toLowerCase()
    return String.fromCharCode("a".charCodeAt(0) + "z".charCodeAt(0) - lowerChr.charCodeAt(0))
  }

  return ""
}