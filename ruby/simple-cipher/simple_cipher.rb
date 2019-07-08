class Cipher
  VALID_KEY = /\A[a-z]+\z/
  ALPH_LENGTH = 26

  attr_reader :key

  def initialize(key = 'aaaaaaaaaa')
    raise ArgumentError unless key.match(VALID_KEY)

    @key = key
  end

  def key_chrs
    @key_chrs ||= key.each_char.cycle
  end

  def encode(data)
    key_chrs.rewind
    data
      .each_char
      .sum('') { |chr| encode_chr(chr) }
  end

  def decode(data)
    data
      .each_char
      .with_index
      .sum('') { |chr, index| decode_chr(chr, key[index]) }
  end

  private

  def encode_chr(chr)
    to_chr(to_index(chr) + to_index(key_chrs.next))
  end

  def decode_chr(chr, key_chr)
    to_chr(to_index(chr) - to_index(key_chr))
  end

  def to_index(chr)
    chr.ord - 'a'.ord
  end

  def to_chr(index)
    ((index % ALPH_LENGTH) + 'a'.ord).chr
  end
end
