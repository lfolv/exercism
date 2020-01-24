module RotationalCipher
  CHARACTERS = %W{a b c d e f g h i j k l m n o p q r s t u v w x y z}

  def self.rotate(text, key)
    text.gsub(/[a-zA-Z]/) { |chr| rotate_character(chr, key) }
  end

  def self.rotate_character(chr, key)
    return CHARACTERS[(CHARACTERS.index(chr.downcase) + key) % CHARACTERS.length].upcase if chr == chr.upcase

    CHARACTERS[(CHARACTERS.index(chr) + key) % CHARACTERS.length]
  end
end
