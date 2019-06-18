class Cipher
  attr_reader :key

  def initialize(key = 'aaaaaaaaaa')
    @key = key
  end

  def encode(data)
    key
  end

  def decode(data)
    data
      .each_char
      .with_index
      .map do |chr, index|
        (chr[0].ord - key[index].ord + 97).chr
      end
      .join
  end
end
