class Crypto
  def initialize(plaintext)
    @plaintext = plaintext
  end

  def plaintext
    @normalized_plain_text ||= @plaintext.downcase.gsub(/\W*/, '')
  end

  def ciphertext
    until plaintext.size % column_size == 0
      plaintext << ' '
    end
    
    plaintext
      .each_char
      .each_slice(column_size)
      .to_a
      .transpose
      .map(&:join)
      .join(' ')
  end
  
  private
    def column_size
      size = Math.sqrt(plaintext.length).ceil
      size.zero? ? 1 : size
    end
end