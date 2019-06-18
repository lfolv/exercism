class Cipher
  ALPHABET = 'a'..'z'

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
    (ALPHABET.find_index(chr) + ALPHABET.find_index(key_chr) + 97).chr
  end

  def decode_chr(chr, key_chr)
    (ALPHABET.find_index(chr) - ALPHABET.find_index(key_chr) + 97).chr
  end
end
