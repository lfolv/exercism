const WORD_PATTERN = /(\w+)/g;

class Words {
  count(sentence: string): Map<string, number> {
    const count = new Map();
    const words = sentence.match(WORD_PATTERN) || [];

    for (let word of words) {
      count.set(word, 1);
    }

    return count;
  }
}

export default Words;
