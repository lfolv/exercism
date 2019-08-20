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

  decode(data) {
    return data
      .split('')
      .map((chr, index) => decodeChr(chr, index, this.key))
      .join('')
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

function encodeChr(chr, index, key) {
  const i = (
    CHRS.indexOf(chr) +
    CHRS.indexOf(key.charAt(index % key.length))
  ) % CHRS.length 

  return CHRS[i]
}
  

function decodeChr(chr, index, key) {
  let i = CHRS.indexOf(chr) - CHRS.indexOf(key.charAt(index % key.length))

  if (i < 0) {
    i += CHRS.length
  }

  return CHRS[i]
}