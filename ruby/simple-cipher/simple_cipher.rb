class Cipher
  VALID_KEY = /\A[a-z]+\z/
  ALPH_LENGTH = 26
  START_ORD_CODE = 97

  attr_reader :key

  def initialize(key = 'aaaaaaaaaa')
    raise ArgumentError unless key.match(VALID_KEY)

    @key = key
  end

  def encode(data)
    data
      .each_char
      .with_index
      .sum('') { |chr, index| encode_chr(chr, key[index]) }
  end

  def decode(data)
    data
      .each_char
      .with_index
      .map { |chr, index| decode_chr(chr, key[index]) }
      .join
  end

  private

  def encode_chr(chr, key_chr)
    to_chr(to_index(chr) + to_index(key_chr))
  end

  def decode_chr(chr, key_chr)
    to_chr(to_index(chr) - to_index(key_chr))
  end

  def to_index(chr)
    chr.ord - START_ORD_CODE
  end

  def to_chr(index)
    ((index % ALPH_LENGTH) + START_ORD_CODE).chr
  end
end
