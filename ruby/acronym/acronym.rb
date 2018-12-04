module Acronym
  BORDERLINES = /\b\w/

  def self.abbreviate(sentence)
    sentence
      .scan(BORDERLINES)
      .join
      .upcase
  end
end