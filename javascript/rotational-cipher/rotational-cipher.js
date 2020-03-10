const ALPH = [...'abcdefghijklmnopqrstuvwxyz']

export class RotationalCipher {
  static rotate(input, rotate) {
    return input.replace(/[a-z]/g, (letter) =>
      RotationalCipher.rotateLetter(letter, rotate))
  }

  static rotateLetter(letter, rotate) {
    return ALPH[
      (ALPH.indexOf(letter) + rotate) % ALPH.length
    ]
  }
}
