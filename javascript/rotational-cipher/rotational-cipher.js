const LETTERS = [...'abcdefghijklmnopqrstuvwxyz']
const LETTER_PATTERN = /[a-zA-Z]/g

export class RotationalCipher {
  static rotate(input, rotate) {
    return input.replace(LETTER_PATTERN, (letter) =>
      RotationalCipher.rotateLetter(letter, rotate))
  }

  static rotateLetter(letter, rotate) {
    if (letter === letter.toUpperCase()) {
      return RotationalCipher
        .rotateLetter(letter.toLowerCase(), rotate)
        .toUpperCase()
    }

    const letterIndex = LETTERS.indexOf(letter)
    const rotatedLetterIndex = (letterIndex + rotate) % LETTERS.length
    return LETTERS[rotatedLetterIndex]
  }
}
