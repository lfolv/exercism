export const encode = data => data.replace(/((.)\2*)/g, shrink);

const shrink = characters =>
  characters.length === 1
    ? characters[0]
    : `${characters.length}${characters[0]}`;

export const decode = data => data.replace(/(\d*)(.)/g, grow);

const grow = encoded =>
  encoded.length === 1
    ? encoded
    : encoded[encoded.length - 1].repeat(Number.parseInt(encoded));
