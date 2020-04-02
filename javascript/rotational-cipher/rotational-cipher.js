const AVALIABLE_ROTATE_CHRS = /[a-zA-Z]/g;
const ASCII_START_CODE = 97;
const ALPHABET_LENGTH = 26;

export class RotationalCipher {
  static rotate(input, key) {
    return input.replace(AVALIABLE_ROTATE_CHRS, chr =>
      this.rotateChr(chr, key)
    );
  }

  static rotateChr(chr, key) {
    if (chr === chr.toUpperCase()) {
      const lowerChr = chr.toLowerCase();

      return this.rotateChr(lowerChr, key).toUpperCase();
    }

    const inputIndex = chr.charCodeAt(0) - ASCII_START_CODE;
    const outputIndex =
      ((inputIndex + key) % ALPHABET_LENGTH) + ASCII_START_CODE;

    return String.fromCharCode(outputIndex);
  }
}
