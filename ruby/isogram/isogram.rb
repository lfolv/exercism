module Isogram
  IGNORE_CHARS = /[^\s\-]/

  def self.isogram?(sentence)
    letters = {}
    sentence.upcase.each_char do |chr|
      return false if chr =~ IGNORE_CHARS && letters[chr]
      letters[chr] = true
    end
    true
  end
end