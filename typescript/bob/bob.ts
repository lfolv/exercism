const isSayingAnything = (message: string) => message.length === 0

const isYelling = (message: string) =>
  message.match(/[a-zA-Z]/) && message === message.toUpperCase()

const isAQuestion = (message: string) => message.endsWith('?')

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
