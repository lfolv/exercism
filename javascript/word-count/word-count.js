export class Words {
  count(phrase) {
    return phrase
      .split(' ')
      .reduce((counter, word) => ({
        ...counter,
        [word]: counter[word] + 1 || 1
      }), {})
  }
}
