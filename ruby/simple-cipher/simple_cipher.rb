class Cipher
  VALID_KEY = /\A[a-z]+\z/
  ALPH_LENGTH = 26
  START_ALPH_UNICODE = 'a'.ord

  attr_reader :key

  def initialize(key = 'aaaaaaaaaa')
    raise ArgumentError unless key.match(VALID_KEY)

    @key = key
  end

  def encode(data)
    key_characters.rewind
    data
      .each_char
      .sum('') { |chr| encode_character(chr) }
  end

  def decode(data)
    key_characters.rewind
    data
      .each_char
      .sum('') { |chr| decode_character(chr) }
  end

  private

  def key_characters
    @key_characters ||= key.each_char.cycle
  end

  def encode_character(chr)
    to_chr to_index(chr) + to_index(key_characters.next)
  end

  def decode_character(chr)
    to_chr to_index(chr) - to_index(key_characters.next)
  end

  def to_index(chr)
    chr.ord - START_ALPH_UNICODE
  end

  def to_chr(index)
    ((index % ALPH_LENGTH) + START_ALPH_UNICODE).chr
  end
end
