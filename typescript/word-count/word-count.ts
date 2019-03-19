class Words {
  count(sentence: string): Map<string, number> {
    const count: Map<string, number> = new Map();

    for (let word of eachWord(sentence)) {
      let current: number = count.get(word) || 0;
      count.set(word, ++current);
    }

    return count;
  }
}

function eachWord(sentence: string): string[] {
  const pattern = /([\w:!&@$%^]+)/g;
  const words: string[] = sentence.match(pattern) || [];
  return words.map(word => word.toLowerCase());
}

export default Words;
