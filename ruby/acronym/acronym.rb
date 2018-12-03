module Acronym
  BORDERLINES = /\b\w/

  def self.abbreviate(sentence)
    sentence
      .scan(BORDERLINES)
      .map { |word| word.upcase }
      .join('')
  end
end