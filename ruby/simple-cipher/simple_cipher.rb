class Cipher
  attr_reader :key

  def initialize(key = 'aaaaaaaaaa')
    @key = key
  end

  def encode(data)
    data
      .each_char
      .with_index
      .map { |chr, index| encode_chr(chr, key[index]) }
      .join
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
    chr[0].ord - 97
  end

  def to_chr(index)
    (index + 97).chr
  end
end
