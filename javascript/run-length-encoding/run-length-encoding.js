const CONSECUTIVE_CHARACTERS = /((.)\2*)/g
const ENCODED_DATA = /(\d*)(.)/g

export const encode = data => data.replace(CONSECUTIVE_CHARACTERS, shrink);

const shrink = characters =>
  characters.length === 1
    ? characters[0]
    : `${characters.length}${characters[0]}`;

export const decode = data => data.replace(ENCODED_DATA, grow);

const grow = encoded =>
  encoded.length === 1
    ? encoded
    : encoded[encoded.length - 1].repeat(Number.parseInt(encoded));
