class Crypto
  attr_reader :ciphertext

  def self.normalize(plaintext)
    plaintext.downcase.gsub(/\W*/, '')
  end

  def initialize(plaintext)
    @ciphertext = Crypto.normalize(plaintext)
  end
end