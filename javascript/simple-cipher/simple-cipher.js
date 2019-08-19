const CHRS = [...'abcdefghijklmnopqrstuvwxyz']

export class Cipher {
  constructor(key = generateKey()) {
    this._key = key
  }

  encode(data) {
    return data
      .split('')
      .map((chr, index) => encodeChr(chr, index, this.key))
      .join('')
  }

  decode() {
    throw new Error("Remove this statement and implement this function");
  }

  get key() {
    return this._key
  }
}

function generateKey() {
  let result = ''

  for (let i = 0; i < 10; i++) {
    result += CHRS[Math.floor(Math.random() * CHRS.length)]
  }

  return result
}

const encodeChr = (chr, index, key) => 
  CHRS[
    CHRS.indexOf(chr) +
    CHRS.indexOf(key.charAt(index))
  ]