export class Words {
  count(phrase) {
    return phrase
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .reduce((counter, word) => ({
        ...counter,
        [word]: counter[word] + 1 || 1
      }), {})
  }
}
