class Bob {
  hey(message: string) {
    message = message.trim()

    if (message.length === 0) {
      return "Fine. Be that way!";
    }

    if (message.match(/[a-zA-Z]/) && message === message.toUpperCase()) {
      if (message.endsWith('?')) {
        return "Calm down, I know what I'm doing!";
      } else {
        return "Whoa, chill out!";
      }
    }

    if (message.endsWith('?')) {
      return "Sure.";
    }

    return "Whatever.";
  }
}

export default Bob;
