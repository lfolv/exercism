module Acronym
  BORDERLINES = /\W+/

  def self.abbreviate(sentence)
    sentence
      .split(BORDERLINES)
      .map { |word| word[0].upcase }
      .join('')
  end
end