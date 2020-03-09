const ALPH = [...'abcdefghijklmnopqrstuvwxyz']

export class RotationalCipher {
  static rotate(input, rotate) {
    return ALPH[
      (ALPH.indexOf(input) + rotate) % ALPH.length
    ]
  }
}
