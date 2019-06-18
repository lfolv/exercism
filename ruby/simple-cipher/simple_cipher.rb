class Cipher
  attr_reader :key

  def initialize(key = "aaaaaaaaaa")
    @key = key
  end

  def encode(data)
    key
  end
end
