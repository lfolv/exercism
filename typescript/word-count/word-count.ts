class Words {
  count(word: string): Map<string, number> {
    const words = new Map();
    words.set(word, 1);
    return words;
  }
}

export default Words;
