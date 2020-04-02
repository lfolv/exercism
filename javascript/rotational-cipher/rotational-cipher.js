export class RotationalCipher {
  static rotate(input, key) {
    return input.replace(/[a-zA-Z]/g, chr => this.rotateChr(chr, key));
  }

  static rotateChr(chr, key) {
    if (chr === chr.toUpperCase()) {
      const lowerChr = chr.toLowerCase();

      return this.rotateChr(lowerChr, key).toUpperCase();
    }

    const inputIndex = chr.charCodeAt(0) - ASCII_START_CODE;
    const outputIndex =
      ((inputIndex + key) % ALPHABET_LENGTH) + ASCII_START_CODE;

    return LATIN_ALPABET[outputIndex];
  }
}
