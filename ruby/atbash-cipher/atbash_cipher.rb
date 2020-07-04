module Atbash
  def self.encode(message)
    result = ""

    message.downcase.each_char do |chr|
      result << ('a'.ord + 'z'.ord - chr.ord).chr
    end

    result
  end
end