const YELL_PATTERN = /^[A-Z\s!]+$/;
const QUESTION_PATTERN = /^.+\?$/;

export const hey = message => {
  if (message.match(YELL_PATTERN)) {
    return "Whoa, chill out!";
  }

  if (message.match(QUESTION_PATTERN)) {
    return "Sure.";
  }

  return "Whatever.";
};
