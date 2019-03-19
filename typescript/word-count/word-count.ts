const WORD_PATTERN = /(\w+)/g;

class Words {
  count(sentence: string): Map<string, number> {
    const count: Map<string, number> = new Map();
    const words: string[] = sentence.match(WORD_PATTERN) || [];

    for (let word of words) {
      let current: number = count.get(word) || 0;
      count.set(word, ++current);
    }

    return count;
  }
}

export default Words;
