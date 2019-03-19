class Words {
  count(sentence: string): Map<string, number> {
    return eachWord(sentence).reduce(countWord, new Map<string, number>());
  }
}

function eachWord(sentence: string): string[] {
  const pattern = /(\S+)/g;
  const words: string[] = sentence.match(pattern) || [];
  return words.map(word => word.toLowerCase());
}

function countWord(
  words: Map<string, number>,
  word: string
): Map<string, number> {
  let current: number = words.get(word) || 0;
  words.set(word, ++current);
  return words;
}

export default Words;
