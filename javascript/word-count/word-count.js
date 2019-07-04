const reducer = (counter, word) => ({
  ...counter,
  [word]: Number.isInteger(counter[word]) ? counter[word] + 1 : 1
})

export class Words {
  count(phrase) {
    return phrase
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .reduce(reducer, {})
  }
}
