class Crypto
  attr_reader :ciphertext

  def initialize(plaintext)
    @ciphertext = plaintext
  end
end