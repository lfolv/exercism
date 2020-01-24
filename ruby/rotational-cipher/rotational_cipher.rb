module RotationalCipher
  def self.rotate(text, key)
    text.gsub(/\w/) { |character| (character.ord + key).chr }
  end
end
