const YELL_PATTERN = /^[A-Z\s!]+$/;

export const hey = message => {
  if (message.match(YELL_PATTERN)) {
    return "Whoa, chill out!";
  }
  return "Whatever.";
};
