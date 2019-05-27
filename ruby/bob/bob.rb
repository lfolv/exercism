module Bob
  FOREFUL_QUESTION = /\A[A-Z\s!]+\?\z/
  YELL = /\A^(?:\d+\,?\s*)*(?:[A-Z]+[\s!]*[^a-z]*)+\z/
  QUESTION = /\A^.+\?\s*\z/
  SILENCE = /\A^\s*\z/

  def self.hey(message)
    case message
    when FOREFUL_QUESTION
      "Calm down, I know what I'm doing!"
    when YELL
      "Whoa, chill out!"
    when QUESTION
      "Sure."
    when SILENCE
      "Fine. Be that way!"
    else
      "Whatever."
    end
  end
end
