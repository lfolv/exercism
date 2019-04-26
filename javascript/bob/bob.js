const FOREFUL_QUESTION_PATTEN = /^[A-Z\s!]+\?$/;
const YELL_PATTERN = /^(?:\d+\,?\s*)*(?:[A-Z]+[\s!]*)+$/;
const QUESTION_PATTERN = /^.+\?$/;

export const hey = message => {
  if (message.match(FOREFUL_QUESTION_PATTEN)) {
    return "Calm down, I know what I'm doing!";
  }

  if (message.match(YELL_PATTERN)) {
    return "Whoa, chill out!";
  }

  if (message.match(QUESTION_PATTERN)) {
    return "Sure.";
  }

  return "Whatever.";
};
