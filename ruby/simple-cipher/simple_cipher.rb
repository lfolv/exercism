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
      .map do |chr, index|
        (ALPHABET.find_index(chr) + ALPHABET.find_index(key[index]) + 97).chr
      end
      .join
  end

  def decode(data)
    data
      .each_char
      .with_index
      .map do |chr, index|
        (ALPHABET.find_index(chr) - ALPHABET.find_index(key[index]) + 97).chr
      end
      .join
  end
end
