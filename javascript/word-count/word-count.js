export class Words {
  count(phrase) {
    return phrase
      .toLowerCase()
      .split(/\s+/)
      .reduce((counter, word) => ({
        ...counter,
        [word]: counter[word] + 1 || 1
      }), {})
  }
}
