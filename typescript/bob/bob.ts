function isSayingAnything(message: string) {
  return message.length === 0
}

function isYelling(message: string) {
  return message.match(/[a-zA-Z]/) && message === message.toUpperCase()
}

function isAQuestion(message: string) {
  return message.endsWith('?')
}

class Bob {
  hey(message: string) {
    message = message.trim()

    if (isSayingAnything(message)) {
      return "Fine. Be that way!";
    }

    if (isYelling(message)) {
      if (isAQuestion(message)) {
        return "Calm down, I know what I'm doing!";
      } else {
        return "Whoa, chill out!";
      }
    }

    if (isAQuestion(message)) {
      return "Sure.";
    }

    return "Whatever.";
  }
}

export default Bob;
