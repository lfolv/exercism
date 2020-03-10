const ALPH = [...'abcdefghijklmnopqrstuvwxyz']

export class RotationalCipher {
  static rotate(input, rotate) {
    return input.replace(/[a-zA-Z]/g, (letter) =>
      RotationalCipher.rotateLetter(letter, rotate))
  }

  static rotateLetter(letter, rotate) {
    if (letter === letter.toUpperCase()) {
      return RotationalCipher
        .rotateLetter(letter.toLowerCase(), rotate)
        .toUpperCase()
    }

    return ALPH[
      (ALPH.indexOf(letter) + rotate) % ALPH.length
    ]
  }
}
