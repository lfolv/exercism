const CHRS = [...'abcdefghijklmnopqrstuvwxyz']

export class Cipher {
  constructor(key = generateKey()) {
    this._key = key
  }

  encode(data) {
    return this.transformWith(data, encodeChr)
  }

  decode(data) {
    return this.transformWith(data, decodeChr)
  }

  get key() {
    return this._key
  }

  transformWith(data, callback) {
    return data 
      .split('')
      .map((chr, index) => callback(chr, index, this.key))
      .join('')
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
