module Bob
  FOREFUL_QUESTION_PATTEN = /\A[A-Z\s!]+\?\z/;
  YELL_PATTERN = /\A^(?:\d+\,?\s*)*(?:[A-Z]+[\s!]*[^a-z]*)+\z/;
  QUESTION_PATTERN = /\A^.+\?\s*\z/;
  SILENCE_PATTERN = /\A^\s*\z/;

  def self.hey(message)
    case message
    when FOREFUL_QUESTION_PATTEN
      "Calm down, I know what I'm doing!"
    when YELL_PATTERN
      "Whoa, chill out!"
    when QUESTION_PATTERN
      "Sure."
    when SILENCE_PATTERN
      "Fine. Be that way!"
    else
      "Whatever."
    end
  end
end
